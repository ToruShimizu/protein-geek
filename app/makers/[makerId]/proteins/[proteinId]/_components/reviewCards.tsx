import Rate from "@/app/_components/rate"
import { notoSansJp } from "@/app/_styles/fonts"
import { TAGS } from "_constants/reviews"
import { Flavor, Review } from "types/responses"

type Props = {
  flavors: Flavor[]
  reviews: Review[]
}

export default function ReviewCards({ reviews, flavors }: Props) {
  const getFlavor = (id: string) => {
    return flavors.find((flavor) => flavor.id === id)
  }
  return (
    <div className={`grid gap-4 ${notoSansJp.className}`}>
      {reviews.map((review) => (
        <div key={review.id} className="grid gap-1 p-4 border border-gray-200 rounded-lg shadow">
          <span className="text-xs font-bold">ニックネーム</span>
          <p className="text-sm text-neutral-600">{review.name}</p>
          <span className="text-xs font-bold">おすすめの味</span>
          {getFlavor(review.flavor_id)?.name && (
            <p className="text-sm text-neutral-600 mt-1">
              {getFlavor(review.flavor_id)?.name ?? "未登録"}
            </p>
          )}
          <span className="text-xs font-bold">{`評価 ${review.rate} / 5`}</span>
          <Rate rate={Number(review.rate)} />
          <span className="text-xs font-bold">コメント</span>
          <p className="text-sm text-neutral-600">{review.description}</p>
          {review.tag_ids.length > 0 && (
            <div>
              {review.tag_ids.map((id: number) => {
                const tag = TAGS.find((tag) => tag.id === String(id))
                return (
                  tag && (
                    <span
                      className={`text-[10px] md:text-xs w-full font-medium me-2 px-2.5 py-0.5 rounded-full ${tag.variant}`}
                    >
                      {tag.label}
                    </span>
                  )
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
