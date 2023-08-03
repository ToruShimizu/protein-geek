import { makerRepo } from "../../../repos/makers"
import { Suspense } from "react"
import ProteinList from "./_components/proteinList"
import HomeIcon from "../../_components/icons/homeIcon"
import MainContainer from "../../_components/mainContainer"
import PageTitle from "../../_components/pageTitle"

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
        <PageTitle>{maker.name}</PageTitle>
        <Suspense fallback={<div>...loading</div>}>
          {proteins && <ProteinList proteins={proteins} />}
        </Suspense>
      </section>
    </MainContainer>
  )
}
