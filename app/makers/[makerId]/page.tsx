import { makerRepo } from "../../../repos/makers"
import { Suspense } from "react"
import ProteinList from "./_components/proteinList"
import { montSerrat } from "../../_styles/fonts"

export default async function Page({ params }: { params: { makerId: string } }) {
  const { maker, proteins } = await makerRepo.fetchById(Number(params.makerId))

  return (
    <main>
      <section>
        <h2 className={`text-3xl font-bold pb-6 ${montSerrat.className}`}>{maker.name}</h2>
        <Suspense fallback={<div>...loading</div>}>
          {proteins && <ProteinList proteins={proteins} />}
        </Suspense>
      </section>
    </main>
  )
}
