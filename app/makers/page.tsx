import Link from "next/link"
import { makerRepo } from "../../repos/makers"

export default async function Page() {
  const makers = await makerRepo.fetch()

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">メーカー一覧</h2>
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          {makers.map((maker) => (
            <li key={maker.id} className="grid gap-1 md:gap-2">
              <Link href={`/makers/${maker.id}`}>
                <div className="grid gap-2">
                  {maker.src && <img src={maker.src} alt="プロテインメーカー" />}
                  <p className="text-sm md:text-lg">{maker.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
