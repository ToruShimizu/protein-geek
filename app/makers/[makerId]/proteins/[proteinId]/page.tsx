import { proteinRepo } from "../../../../../repos/proteins"
import ProteinSection from "./_components/proteinSection"
import ReviewSection from "./_components/reviewSection"

const DUMMY_REVIEWS = [
  {
    id: 1,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん",
    rate: 5,
    title: "とても美味しい",
  },
  {
    id: 2,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん2",
    rate: 1,
    title: "まずい",
  },
  {
    id: 3,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん3",
    rate: 3,
    title: "普通",
  },
]

export default async function Page({ params }: { params: { proteinId: string } }) {
  const { protein, flavors, seller, products } = await proteinRepo.fetchById(
    Number(params.proteinId),
  )

  return (
    <main className="grid gap-16 md:gap-20">
      <ProteinSection flavors={flavors} products={products} protein={protein} seller={seller} />
      <ReviewSection reviews={DUMMY_REVIEWS} />
    </main>
  )
}
