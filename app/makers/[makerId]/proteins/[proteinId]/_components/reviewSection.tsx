"use client"
import { notoSansJp } from "@/app/_styles/fonts"
import { Protein, Review } from "types/responses"
import ReviewForm from "../_templates/reviewForm"
import ReviewCards from "./reviewCards"

type Props = {
  protein: Protein
  reviews?: Review[]
}
export default function ReviewSection({ protein, reviews }: Props) {
  return (
    <section className="grid gap-8">
      <div>
        <h2 className={`text-xl lg:text-3xl font-bold mb-2 md:mb-4 ${notoSansJp.className}`}>
          レビュー
        </h2>
        <hr className="border-1" />
      </div>
      <ReviewForm protein={protein} />
      {reviews && reviews.length > 0 && <ReviewCards reviews={reviews} />}
    </section>
  )
}
