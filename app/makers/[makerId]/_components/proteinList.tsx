"use client"
import List from "@/app/_components/lists/list"
import UnorderedList from "@/app/_components/lists/unorderedList"
import Rate from "@/app/_components/rate"
import { montSerrat } from "@/app/_styles/fonts"
import { staticUrl } from "_constants/urls"
import { calculateRateAverage, createStaticUrl } from "modules/utils"
import Link from "next/link"
import Image from "next/image"
import { ProteinByMakerIdResponse } from "types/responses"

type Props = {
  proteins: Pick<
    ProteinByMakerIdResponse,
    "__typename" | "id" | "name" | "src" | "maker_id" | "reviews"
  >[]
}

export default function ProteinList({ proteins }: Props) {
  console.log(proteins[0].src)

  return (
    <UnorderedList>
      {proteins.map(({ id, src, name, maker_id, reviews }) => (
        <List key={id}>
          <Link href={`/makers/${maker_id}/proteins/${id}`}>
            <div className="grid gap-2 group">
              {src && (
                <div className="relative">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={createStaticUrl({
                      baseUrl: staticUrl,
                      src,
                    })}
                    alt={name}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-stone-800 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
                </div>
              )}
              <div className="grid gap-1">
                <p className={`text-xs lg:text-sm font-bold text-gray-400 ${montSerrat.className}`}>
                  {name}
                </p>
                <Rate rate={calculateRateAverage(reviews)} count={reviews.length} />
              </div>
            </div>
          </Link>
        </List>
      ))}
    </UnorderedList>
  )
}
