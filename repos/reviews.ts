import {
  ReviewsInsertInput,
  useInsertIntoReviewsCollectionMutation,
  useReviewsCollectionQuery,
} from "../api/graphql/generated/graphql"

export const clientReviewRepo = {
  fetchByFlavorIds: (ids: number[]) => {
    const { data, error } = useReviewsCollectionQuery({ variables: { ids } })
    if (error) throw error

    const reviews = data?.reviewsCollection?.edges?.map((edge) => edge?.node)
    return reviews
  },
  create: async (
    input: ReviewsInsertInput,
    func: ReturnType<typeof useInsertIntoReviewsCollectionMutation>[0],
  ) => {
    const { data } = await func({ variables: { objects: input } })
    const review = data?.insertIntoreviewsCollection?.records?.[0]
    if (!review) throw new Error("Review not created")

    return review
  },
}
