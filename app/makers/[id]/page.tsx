import { proteinRepo } from "../../../repos/proteins"
import { makerRepo } from "../../../repos/makers"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {
  const maker = await makerRepo.fetchById(Number(params.id))
  const proteins = await proteinRepo.fetchByMakerId(Number(params.id))

  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold pb-6">{maker.name}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {proteins.map(({ node }) => (
            <li key={node.id} className="grid gap-1 md:gap-2">
              <Link href={`/makers/${maker.id}/proteins/${node.id}`}>
                <div className="grid gap-2 group">
                  {node.src && (
                    <div className="relative">
                      <img src={node.src} alt="プロテインメーカー" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 bg-stone-800 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
                    </div>
                  )}
                  <div>
                    <p className="mb-1 text-xs lg:text-sm font-bold text-gray-400">{node.name}</p>
                    <p className="text-sm md:text-base font-bold text-zinc-600">{node.flavor}</p>
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
