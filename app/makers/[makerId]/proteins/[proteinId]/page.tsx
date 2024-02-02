import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import { makerRepo } from "repos/makers"
import { proteinRepo } from "repos/proteins"
import { reviewRepo } from "repos/reviews"
import dynamic from "next/dynamic"
import { factRepo } from "repos/facts"

export const revalidate = 0
const ProteinContainer = dynamic(() => import("./_components/proteinContainer"), {
  ssr: false,
})

export default async function Page({ params }: { params: { makerId: string; proteinId: string } }) {
  const [{ protein }, { maker }, reviews, { fact }] = await Promise.all([
    proteinRepo.fetchById(Number(params.proteinId)),
    makerRepo.fetchById(Number(params.makerId)),
    reviewRepo.fetchByProteinId(Number(params.proteinId)),
    factRepo.fetchByProteinId(Number(params.proteinId)),
  ])

  return (
    <MainContainer
      lists={[
        { name: "top", icon: <HomeIcon />, href: "/" },
        { name: "メーカー一覧", href: "/makers" },
        { name: maker.name, href: `/makers/${maker.id}` },
        { name: protein.name },
      ]}
    >
      <ProteinContainer protein={protein} reviews={reviews} fact={fact} />
    </MainContainer>
  )
}
