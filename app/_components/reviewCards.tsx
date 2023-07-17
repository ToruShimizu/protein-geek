import Rate from "./rate"

type Props = {
  flavor: string
  reviews: {
    id: number
    description: string
    name: string
    rate: number
    title: string
  }[]
}

export default function ReviewCard({ flavor, reviews }: Props) {
  return (
    <>
      <div>
        <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-4">
          {flavor}味のレビュー
        </h2>
        <hr className="border-1" />
      </div>
      <div className="grid gap-4">
        {reviews.map((review) => (
          <>
            <div
              key={review.id}
              className="grid gap-1 p-4 border border-gray-200 rounded-lg shadow"
            >
              <h5 className="text-base font-bold">{review.title}</h5>
              <p className="text-sm text-neutral-600">{review.name}</p>
              <Rate rate={review.rate} />
              <p className="text-sm text-neutral-600">{review.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
