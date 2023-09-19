import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import { makerRepo } from "repos/makers"
import { proteinRepo } from "repos/proteins"
import { reviewRepo } from "repos/reviews"
import ProteinContainer from "./_components/proteinContainer"

export default async function Page({ params }: { params: { makerId: string; proteinId: string } }) {
  const [{ protein }, { maker }] = await Promise.all([
    proteinRepo.fetchById(Number(params.proteinId)),
    makerRepo.fetchById(Number(params.makerId)),
  ])

  const reviews = await reviewRepo.fetchByProteinId(Number(params.proteinId))

  return (
    <MainContainer
      lists={[
        { name: "top", icon: <HomeIcon />, href: "/" },
        { name: "メーカー一覧", href: "/makers" },
        { name: maker.name, href: `/makers/${maker.id}` },
        { name: protein.name },
      ]}
    >
      <ProteinContainer protein={protein} reviews={reviews} />
    </MainContainer>
  )
}
