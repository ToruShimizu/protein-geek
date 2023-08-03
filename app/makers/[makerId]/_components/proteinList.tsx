"use client"
import Link from "next/link"
import { Proteins } from "../../../../api/graphql/generated/graphql"
import Rate from "../../../_components/rate"
import { createStaticUrl } from "../../../../modules/utils"
import { staticUrl } from "../../../../_constants/urls"
import { montSerrat } from "../../../_styles/fonts"
import UnorderedList from "../../../_components/lists/unorderedList"
import List from "../../../_components/lists/list"

type Props = {
  proteins: Pick<Proteins, "__typename" | "id" | "name" | "src" | "maker_id">[]
}

export default function ProteinList({ proteins }: Props) {
  return (
    <UnorderedList>
      {proteins.map(({ id, src, name, maker_id }) => (
        <List key={id}>
          <Link href={`/makers/${maker_id}/proteins/${id}`}>
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
              <div className="grid gap-1">
                <p className={`text-xs lg:text-sm font-bold text-gray-400 ${montSerrat.className}`}>
                  {name}
                </p>
                {/* TODO: 数値入れ替え */}
                <Rate rate={2} count={50} />
              </div>
            </div>
          </Link>
        </List>
      ))}
    </UnorderedList>
  )
}
