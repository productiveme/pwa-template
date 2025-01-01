import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { useServer } from "graphql-ws/lib/use/ws";
import { WebSocketServer } from "ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema.js";
import { db } from "./db.js";
import { createPubSub } from "graphql-yoga";

const PORT = process.env.VITE_PORT_GQL || 3002;

const pubSub = createPubSub();

const resolvers = {
  Query: {
    posts: () => db.posts,
    post: (_, { id }) => db.posts.find((post) => post.id === id),
  },

  Post: {
    comments: (post) =>
      db.comments.filter((comment) => comment.postId === post.id),
  },

  Mutation: {
    addPost: (_, { title, content }) => {
      const post = {
        id: String(db.posts.length + 1),
        title,
        content,
      };
      db.posts.push(post);
      return post;
    },

    addComment: (_, { postId, text }) => {
      const comment = {
        id: String(db.comments.length + 1),
        text,
        postId,
      };
      db.comments.push(comment);
      pubSub.publish(`POST_${postId}_NEW_COMMENT`, { newComment: comment });
      return comment;
    },
  },

  Subscription: {
    newComment: {
      subscribe: (_, { postId }) => ({
        [Symbol.asyncIterator]: () =>
          pubSub.subscribe(`POST_${postId}_NEW_COMMENT`),
      }),
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
  graphiql: {
    subscriptionsProtocol: "WS",
  },
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['POST', 'GET', 'OPTIONS']
  },
  landingPage: false,
  multipart: true
});

const server = createServer(yoga);

const wsServer = new WebSocketServer({
  server,
  path: yoga.graphqlEndpoint,
});

useServer(
  {
    schema,
    context: () => ({ pubSub }),
  },
  wsServer,
);

server.listen(PORT, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/graphql`);
});
