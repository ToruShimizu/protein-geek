"use client"
import Link from "next/link"
import { Makers } from "../../../api/graphql/generated/graphql"
import { createStaticUrl } from "../../../modules/utils"
import { staticUrl } from "../../../_constants/urls"
import { montSerrat } from "../../_styles/fonts"

type Props = {
  makers: Pick<Makers, "__typename" | "id" | "name" | "src">[]
}

export default function MakerList({ makers }: Props) {
  return (
    <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
      {makers.map(({ id, src, name }) => (
        <li key={id} className="grid gap-1 md:gap-2">
          <Link href={`/makers/${id}`}>
            <div className="grid gap-2 group">
              {src && (
                <div className="relative">
                  <img
                    src={createStaticUrl({
                      baseUrl: staticUrl,
                      src,
                    })}
                    alt={name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-stone-800 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
                </div>
              )}
              <p className={`text-sm md:text-lg ${montSerrat.className}`}>{name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
