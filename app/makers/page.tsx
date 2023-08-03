import { makerRepo } from "../../repos/makers"
import HomeIcon from "../_components/icons/homeIcon"
import MainContainer from "../_components/mainContainer"
import { montSerrat } from "../_styles/fonts"
import MakerList from "./_components/makerList"
import { Suspense } from "react"

export default async function Page() {
  const makers = await makerRepo.fetch()

  return (
    <MainContainer
      lists={[{ name: "top", icon: <HomeIcon />, href: "/" }, { name: "メーカー一覧" }]}
    >
      <section>
        <h2 className={`text-3xl font-bold pb-6 ${montSerrat.className}`}>メーカー一覧</h2>
        <Suspense fallback={<div>...loading</div>}>
          <MakerList makers={makers} />
        </Suspense>
      </section>
    </MainContainer>
  )
}
