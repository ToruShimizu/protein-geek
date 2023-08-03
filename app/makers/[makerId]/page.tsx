import { makerRepo } from "../../../repos/makers"
import { Suspense } from "react"
import ProteinList from "./_components/proteinList"
import { montSerrat } from "../../_styles/fonts"
import HomeIcon from "../../_components/icons/homeIcon"
import MainContainer from "../../_components/mainContainer"

export default async function Page({ params }: { params: { makerId: string } }) {
  const { maker, proteins } = await makerRepo.fetchById(Number(params.makerId))

  return (
    <MainContainer
      lists={[
        { name: "top", icon: <HomeIcon />, href: "/" },
        { name: "メーカー一覧", href: "/makers" },
        { name: maker.name },
      ]}
    >
      <section>
        <h2 className={`text-3xl font-bold pb-6 ${montSerrat.className}`}>{maker.name}</h2>
        <Suspense fallback={<div>...loading</div>}>
          {proteins && <ProteinList proteins={proteins} />}
        </Suspense>
      </section>
    </MainContainer>
  )
}
