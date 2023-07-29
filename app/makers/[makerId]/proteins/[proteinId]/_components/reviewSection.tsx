"use client"

import ReviewCards from "../../../../../_components/reviewCards"
import ReviewForm from "../../../../../_components/reviewForm"

type Props = {
  reviews: {
    id: number
    description: string
    name: string
    rate: number
    title: string
  }[]
}
export default function SelectOption({ reviews }: Props) {
  return (
    <section className="grid gap-8">
      <div>
        <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-4">
          選択された味のレビュー
        </h2>
        <hr className="border-1" />
      </div>
      <ReviewForm />
      <ReviewCards reviews={reviews} />
    </section>
  )
}
