"use client"
import { useAtomValue } from "jotai"

import { Protein } from "../../../../../../types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"
import { flavorAtom } from "../../../../../../stores/proteinAtom"
import { clientReviewRepo } from "../../../../../../repos/reviews"
type Props = {
  protein: Protein
  reviews: {
    id: number
    description: string
    name: string
    rate: number
    title: string
  }[]
}
export default function ProteinContainer({ protein }: Props) {
  const flavor = useAtomValue(flavorAtom)
  const flavorIds = protein.flavors.map((flavor) => flavor.id)
  const reviews = clientReviewRepo.fetchByFlavorIds(flavorIds)

  return (
    <>
      <ProteinSection protein={protein} />
      <ReviewSection reviews={reviews} flavor={flavor} />
    </>
  )
}
