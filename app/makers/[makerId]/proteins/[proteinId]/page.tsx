import { proteinRepo } from "../../../../../repos/proteins"

export default async function Page({ params }: { params: { proteinId: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const protein = await proteinRepo.fetchById(Number(params.proteinId))

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">プロテイン</h2>
      </section>
    </main>
  )
}
