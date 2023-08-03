import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import PageTitle from "@/app/_components/pageTitle"
import { Suspense } from "react"
import { makerRepo } from "repos/makers"
import ProteinList from "./_components/proteinList"

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
