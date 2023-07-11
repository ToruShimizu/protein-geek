import { makerRepo } from "../../../repos/makers"

export default async function Page({ params }: { params: { id: string } }) {
  // eslint-disable-next-line
  const maker = await makerRepo.fetchById(Number(params.id))

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">MY PROTEIN</h2>
      </section>
    </main>
  )
}
