import { proteinRepo } from "../../../../../repos/proteins"
import ReviewCards from "../../../../_components/reviewCards"
import ReviewForm from "../../../../_components/reviewForm"
import ProteinSection from "./_components/proteinSection"

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
      <section className="grid gap-8">
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-4">
            選択された味のレビュー
          </h2>
          <hr className="border-1" />
        </div>
        <ReviewForm />
        <ReviewCards reviews={DUMMY_REVIEWS} />
      </section>
    </main>
  )
}
