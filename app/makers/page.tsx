import { Suspense } from "react"
import { makerRepo } from "repos/makers"
import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import PageTitle from "@/app/_components/pageTitle"
import MakerList from "@/app/makers/_components/makerList"

export const revalidate = 3

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
