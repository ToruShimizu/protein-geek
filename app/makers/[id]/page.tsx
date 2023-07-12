import { proteinRepo } from "../../../repos/proteins"

export default async function Page({ params }: { params: { id: string } }) {
  // eslint-disable-next-line
  const proteins = await proteinRepo.fetchByMakerId(Number(params.id))

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">MY PROTEIN</h2>
      </section>
    </main>
  )
}
