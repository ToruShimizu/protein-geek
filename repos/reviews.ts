import { getClient } from "../api/apollo/client"
import {
  ReviewsCollectionDocument,
  ReviewsCollectionQuery,
  ReviewsCollectionQueryVariables,
} from "../api/graphql/generated/graphql"

const client = getClient()
export const reviewRepo = {
  fetchByFlavorIds: async (ids: number[]) => {
    const { data, error } = await client.query<
      ReviewsCollectionQuery,
      ReviewsCollectionQueryVariables
    >({ query: ReviewsCollectionDocument, variables: { ids } })
    if (error) throw error

    const reviews = data?.reviewsCollection?.edges?.map((edge) => edge?.node)
    return reviews
  },
}
