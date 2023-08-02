"use client"
import { useAtom, useAtomValue } from "jotai"

import { Protein, Review } from "../../../../../../types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"
import { flavorAtom, reviewsAtom } from "../../../../../../stores/proteinAtom"
import { useEffect } from "react"
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
