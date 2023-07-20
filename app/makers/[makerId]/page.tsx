import { proteinRepo } from "../../../repos/proteins"
import { makerRepo } from "../../../repos/makers"
import Link from "next/link"
import Rate from "../../_components/rate"

export default async function Page({ params }: { params: { makerId: string } }) {
  const { maker, proteins } = await makerRepo.fetchById(Number(params.makerId))

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">{maker.name}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {proteins &&
            proteins.map(({ id, src, name }) => (
              <li key={id} className="grid gap-1 md:gap-2">
                <Link href={`/makers/${maker.id}/proteins/${id}`}>
                  <div className="grid gap-2 group">
                    {src && (
                      <div className="relative">
                        <img src={src} alt="プロテインメーカー" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-stone-800 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
                      </div>
                    )}
                    <div className="grid gap-1">
                      <p className="text-xs lg:text-sm font-bold text-gray-400">{name}</p>
                      {/* TODO: 数値入れ替え */}
                      <Rate rate={2} count={50} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  )
}
