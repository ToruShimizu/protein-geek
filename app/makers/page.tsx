import { makerRepo } from "repos/makers"
import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import PageTitle from "@/app/_components/pageTitle"
import MakerList from "@/app/makers/_components/makerList"

export const revalidate = 0

export default async function Page() {
  const makers = await makerRepo.fetch()

  return (
    <div>準備中</div>
    // <MainContainer
    //   lists={[{ name: "top", icon: <HomeIcon />, href: "/" }, { name: "メーカー一覧" }]}
    // >
    //   <section>
    //     <PageTitle>メーカー一覧</PageTitle>
    //     <MakerList makers={makers} />
    //   </section>
    // </MainContainer>
  )
}
