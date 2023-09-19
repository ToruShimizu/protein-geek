import HomeIcon from "@/app/_components/icons/homeIcon"
import MainContainer from "@/app/_components/mainContainer"
import PageTitle from "@/app/_components/pageTitle"
import { makerRepo } from "repos/makers"
import ProteinList from "./_components/proteinList"

export const revalidate = 1

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
        {proteins && <ProteinList proteins={proteins} />}
      </section>
    </MainContainer>
  )
}
