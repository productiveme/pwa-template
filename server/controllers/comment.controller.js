const createCommentController = (commentService) => {
  const addComment = (_, { postId, text }) =>
    commentService.createComment({ postId, text });

  const subscribeToNewComments = {
    subscribe: (_, { postId }) => ({
      [Symbol.asyncIterator]: () => 
        pubSub.subscribe(`POST_${postId}_NEW_COMMENT`)
    })
  };

  return Object.freeze({
    addComment,
    subscribeToNewComments
  });
};

export default createCommentController;
