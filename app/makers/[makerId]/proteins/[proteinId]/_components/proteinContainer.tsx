"use client"
import { useAtomValue } from "jotai"

import { Flavor, Product, Protein, Seller } from "../../../../../../types/responses"
import ProteinSection from "./proteinSection"
import ReviewSection from "./reviewSection"
import { flavorAtom } from "../../../../../../stores/proteinAtom"
type Props = {
  flavors: Flavor[]
  products: Product[]
  protein: Protein
  seller: Seller
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
