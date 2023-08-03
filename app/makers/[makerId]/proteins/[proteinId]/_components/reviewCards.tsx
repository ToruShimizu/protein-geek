import Rate from "@/app/_components/rate"
import { notoSansJp } from "@/app/_styles/fonts"
import { Review } from "types/responses"

type Props = {
  reviews?: Review[]
}

export default function ReviewCards({ reviews }: Props) {
  return (
    <div className={`grid gap-4 ${notoSansJp.className}`}>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id} className="grid gap-1 p-4 border border-gray-200 rounded-lg shadow">
            <h5 className="text-base font-bold">{review.title}</h5>
            <p className="text-sm text-neutral-600">{review.name}</p>
            <Rate rate={review.rate} />
            <p className="text-sm text-neutral-600">{review.description}</p>
          </div>
        ))}
    </div>
  )
}
