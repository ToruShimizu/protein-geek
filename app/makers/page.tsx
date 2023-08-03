import { makerRepo } from "../../repos/makers"
import HomeIcon from "../_components/icons/homeIcon"
import MainContainer from "../_components/mainContainer"
import PageTitle from "../_components/pageTitle"
import MakerList from "./_components/makerList"
import { Suspense } from "react"

export default async function Page() {
  const makers = await makerRepo.fetch()

  return (
    <MainContainer
      lists={[{ name: "top", icon: <HomeIcon />, href: "/" }, { name: "メーカー一覧" }]}
    >
      <section>
        <PageTitle>メーカー一覧</PageTitle>
        <Suspense fallback={<div>...loading</div>}>
          <MakerList makers={makers} />
        </Suspense>
      </section>
    </MainContainer>
  )
}
