import { makerRepo } from "../../repos/makers"

export default async function Page() {
  const makers = await makerRepo.fetch()

  return <main></main>
}
