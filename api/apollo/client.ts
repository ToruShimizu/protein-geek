import { HttpLink } from "@apollo/client"
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../supabase"

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({ addTypename: false }),
    link: new HttpLink({
      uri:
        process.env.NODE_ENV === "development"
          ? "http://localhost:54321/graphql/v1"
          : `${SUPABASE_URL}/graphql/v1?apikey=${SUPABASE_ANON_KEY}`,
    }),
  })
})
