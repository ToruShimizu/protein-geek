"use client"

import { useAtom } from "jotai"
import { useEffect } from "react"
import { reviewsAtom } from "stores/proteinAtom"
import { Fact, Protein, Review } from "types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"

type Props = {
  protein: Protein
  reviews: Review[]
  fact: Fact
}
export default function ProteinContainer({ protein, reviews, fact }: Props) {
  const [displayedReviews, setDisplayedReviews] = useAtom(reviewsAtom)
  useEffect(() => {
    if (reviews) {
      setDisplayedReviews(reviews)
    }
  }, [])

  return (
    <>
      <ProteinSection protein={protein} fact={fact} />
      <ReviewSection reviews={displayedReviews} protein={protein} />
    </>
  )
}
