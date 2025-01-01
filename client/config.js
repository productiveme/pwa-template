export const config = {
  graphqlHttpUrl: `http://localhost:${import.meta.env.VITE_PORT_GQL || 3002}/graphql`,
  graphqlWsUrl: `ws://localhost:${import.meta.env.VITE_PORT_GQL || 3002}/graphql`
}
