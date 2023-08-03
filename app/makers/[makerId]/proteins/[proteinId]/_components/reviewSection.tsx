"use client"
import { useMemo } from "react"
import { Flavor, Review } from "../../../../../../types/responses"
import { notoSansJp } from "../../../../../_styles/fonts"
import ReviewCards from "./reviewCards"
import ReviewForm from "../_templates/reviewForm"

type Props = {
  flavor: Flavor
  reviews?: Review[]
}
export default function ReviewSection({ flavor, reviews }: Props) {
  const filteredReviews = useMemo(
    () => reviews?.filter((review) => review.flavor_id === flavor.id),
    [reviews, flavor],
  )
  return (
    <section className="grid gap-8">
      <div>
        <h2
          className={`text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-4 ${notoSansJp.className}`}
        >
          {flavor.name}のレビュー
        </h2>
        <hr className="border-1" />
      </div>
      <ReviewForm flavorId={flavor.id} />
      <ReviewCards reviews={filteredReviews} />
    </section>
  )
}
