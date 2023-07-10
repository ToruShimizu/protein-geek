"use client"

import { ApolloLink, HttpLink, SuspenseCache } from "@apollo/client"
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../supabase"

function makeClient() {
  const httpLink = new HttpLink({
    uri:
      process.env.NODE_ENV === "development"
        ? "http://localhost:54321/graphql/v1"
        : `${SUPABASE_URL}/graphql/v1?apikey=${SUPABASE_ANON_KEY}`,
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({ addTypename: false }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

function makeSuspenseCache() {
  return new SuspenseCache()
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider>
  )
}
