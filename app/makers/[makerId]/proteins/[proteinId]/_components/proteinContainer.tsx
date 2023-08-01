"use client"
import { useAtomValue } from "jotai"

import { Flavor, Protein } from "../../../../../../types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"
import { flavorAtom } from "../../../../../../stores/proteinAtom"
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
export default function ProteinContainer({ protein, reviews }: Props) {
  const flavor = useAtomValue(flavorAtom)

  return (
    <>
      <ProteinSection protein={protein} />
      <ReviewSection reviews={reviews} flavorId={flavor.id} />
    </>
  )
}
