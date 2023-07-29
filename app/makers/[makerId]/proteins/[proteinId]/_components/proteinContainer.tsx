"use client"
import { useAtomValue } from "jotai"

import { ProteinIdResponse } from "../../../../../../types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"
import { flavorAtom } from "../../../../../../stores/flavorAtom"
type Props = {
  flavors: ProteinIdResponse["flavors"]
  products: ProteinIdResponse["products"]
  protein: ProteinIdResponse["protein"]
  seller: ProteinIdResponse["seller"]
  reviews: {
    id: number
    description: string
    name: string
    rate: number
    title: string
  }[]
}
export default function ProteinContainer({ flavors, products, protein, seller, reviews }: Props) {
  const flavor = useAtomValue(flavorAtom)

  return (
    <>
      <ProteinSection flavors={flavors} products={products} protein={protein} seller={seller} />
      <ReviewSection reviews={reviews} />
    </>
  )
}
