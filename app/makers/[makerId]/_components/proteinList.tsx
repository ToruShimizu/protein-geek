"use client"
import Link from "next/link"
import { Proteins } from "../../../../api/graphql/generated/graphql"
import Rate from "../../../_components/rate"
import { createStaticUrl } from "../../../../modules/utils"

type Props = {
  proteins: Pick<Proteins, "__typename" | "id" | "name" | "src" | "maker_id">[]
}

export default function ProteinList({ proteins }: Props) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {proteins.map(({ id, src, name, maker_id }) => (
        <li key={id} className="grid gap-1 md:gap-2">
          <Link href={`/makers/${maker_id}/proteins/${id}`}>
            <div className="grid gap-2 group">
              {src && (
                <div className="relative">
                  <img
                    src={createStaticUrl({
                      baseUrl: process.env.NEXT_PUBLIC_SUPABASE_STATIC_URL,
                      src,
                    })}
                    alt={name}
                  />
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
  )
}
