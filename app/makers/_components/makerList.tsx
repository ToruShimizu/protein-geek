"use client"
import List from "@/app/_components/lists/list"
import UnorderedList from "@/app/_components/lists/unorderedList"
import { montSerrat } from "@/app/_styles/fonts"
import { staticUrl } from "_constants/urls"
import { Makers } from "api/graphql/generated/graphql"
import { createStaticUrl } from "modules/utils"
import Link from "next/link"
import Image from "next/image"

type Props = {
  makers: Pick<Makers, "__typename" | "id" | "name" | "src">[]
}

export default function MakerList({ makers }: Props) {
  return (
    <UnorderedList>
      {makers.map(({ id, src, name }) => (
        <List key={id}>
          <Link href={`/makers/${id}`} aria-label={`${name}のプロテイン一覧へ`}>
            <div className="grid gap-2 group">
              {src && (
                <div className="relative">
                  <Image
                    src={createStaticUrl({
                      baseUrl: staticUrl,
                      src,
                    })}
                    alt={name}
                    priority
                    width={500}
                    height={500}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-stone-800 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
                </div>
              )}
              <p className={`text-sm md:text-lg ${montSerrat.className}`}>{name}</p>
            </div>
          </Link>
        </List>
      ))}
    </UnorderedList>
  )
}
