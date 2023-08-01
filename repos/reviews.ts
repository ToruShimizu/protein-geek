import {
  ReviewsInsertInput,
  useInsertIntoReviewsCollectionMutation,
} from "../api/graphql/generated/graphql"

export const clientReviewRepo = {
  create: async (input: ReviewsInsertInput) => {
    const [insertIntoReviewsCollectionMutation] = useInsertIntoReviewsCollectionMutation({
      variables: { objects: input },
    })

    const { data, errors } = await insertIntoReviewsCollectionMutation({
      variables: { objects: input },
    })
    if (errors) throw errors[0].message

    const review = data?.insertIntoreviewsCollection?.records[0]
    if (!review) throw "Review not created"
    return review
  },
}
