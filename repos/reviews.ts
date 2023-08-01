import {
  ReviewsInsertInput,
  useInsertIntoReviewsCollectionMutation,
} from "../api/graphql/generated/graphql"

export const clientReviewRepo = {
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
