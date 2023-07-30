import { proteinRepo } from "../../../../../repos/proteins"
import ProteinContainer from "./_components/proteinContainer"

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
  const { protein } = await proteinRepo.fetchById(Number(params.proteinId))

  return (
    <main className="grid gap-16 md:gap-20">
      <ProteinContainer protein={protein} reviews={DUMMY_REVIEWS} />
    </main>
  )
}
