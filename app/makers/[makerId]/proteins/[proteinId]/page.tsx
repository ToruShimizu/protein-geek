import { proteinRepo } from "../../../../../repos/proteins"
import { reviewRepo } from "../../../../../repos/reviews"
import ProteinContainer from "./_components/proteinContainer"

export default async function Page({ params }: { params: { proteinId: string } }) {
  const { protein } = await proteinRepo.fetchById(Number(params.proteinId))
  const flavorIds = protein.flavors.map((flavor) => flavor.id)
  const reviews = await reviewRepo.fetchByFlavorIds(flavorIds)

  return (
    <main className="grid gap-16 md:gap-20">
      <ProteinContainer protein={protein} reviews={reviews} />
    </main>
  )
}
