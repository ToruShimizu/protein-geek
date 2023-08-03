"use client"

import { useAtomValue, useAtom } from "jotai"
import { useEffect } from "react"
import { flavorAtom, reviewsAtom } from "stores/proteinAtom"
import { Protein, Review } from "types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"

type Props = {
  protein: Protein
  reviews?: Review[]
}
export default function ProteinContainer({ protein, reviews }: Props) {
  const flavor = useAtomValue(flavorAtom)

  const [displayedReviews, setDisplayedReviews] = useAtom(reviewsAtom)
  useEffect(() => {
    if (reviews) {
      setDisplayedReviews(reviews)
    }
  }, [])

  return (
    <>
      <ProteinSection protein={protein} />
      <ReviewSection reviews={displayedReviews} flavor={flavor} />
    </>
  )
}
