import Rate from "@/app/_components/rate"
import { notoSansJp } from "@/app/_styles/fonts"
import { Flavor, Review } from "types/responses"

type Props = {
  flavors: Flavor[]
  reviews?: Review[]
}

export default function ReviewCards({ reviews, flavors }: Props) {
  const getFlavor = (id: string) => {
    console.log(reviews)

    return flavors.find((flavor) => flavor.id === id)
  }
  return (
    <div className={`grid gap-4 ${notoSansJp.className}`}>
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review.id} className="grid gap-1 p-4 border border-gray-200 rounded-lg shadow">
            <h5 className="text-sm font-bold">{review.title}</h5>
            <p className="text-sm text-neutral-600">{review.name}</p>
            <Rate rate={Number(review.rate)} />
            <p className="text-sm text-neutral-600">{review.description}</p>
            {getFlavor(review.flavor_id)?.name && (
              <p className="text-sm text-neutral-600 mt-1">
                <span>好きな味: </span>
                {getFlavor(review.flavor_id)?.name}
              </p>
            )}
          </div>
        ))}
    </div>
  )
}
