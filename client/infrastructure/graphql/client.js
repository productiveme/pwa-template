import { createClient } from '@urql/preact'
import { createClient as createWSClient } from 'graphql-ws'
import { subscriptionExchange } from '@urql/core'
import { cacheExchange, fetchExchange } from '@urql/core'
import { config } from '../../config'

const wsClient = createWSClient({
  url: config.graphqlWsUrl
})

export const client = createClient({
  url: config.graphqlHttpUrl,
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => ({
        subscribe: sink => ({
          unsubscribe: wsClient.subscribe(operation, sink)
        })
      })
    })
  ]
})
