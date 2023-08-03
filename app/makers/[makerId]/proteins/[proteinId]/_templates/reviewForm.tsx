import { notoSansJp } from "@/app/_styles/fonts"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  useInsertIntoReviewsCollectionMutation,
  ReviewsInsertInput,
} from "api/graphql/generated/graphql"
import { useAtom } from "jotai"
import { ReviewFormSchemaType, reviewFormSchema } from "modules/validateSchema"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { clientReviewRepo } from "repos/client/reviews"
import { reviewsAtom } from "stores/proteinAtom"
import styles from "@/app/_styles/animation.module.css"

type Props = {
  flavorId: number
}

export default function ReviewForm({ flavorId }: Props) {
  const [reviews, setReviews] = useAtom(reviewsAtom)
  const [insertIntoReviewsCollectionMutation] = useInsertIntoReviewsCollectionMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    reset,
  } = useForm<ReviewFormSchemaType>({
    resolver: zodResolver(reviewFormSchema),
  })
  const [isLoading, setIsLoading] = useState(false)

  const [rate, setRate] = useState(0)
  const [hoveredRate, setHoveredRate] = useState(0)
  const handleSetRate = (value: number) => {
    setValue("rate", value)
    setRate(value)
    clearErrors("rate")
  }

  const onSubmit = async (input: Omit<ReviewsInsertInput, "flavor_id" | "create_at">) => {
    try {
      const review = await clientReviewRepo.create(
        { ...input, flavor_id: flavorId },
        insertIntoReviewsCollectionMutation,
      )
      setReviews([review, ...reviews])
      reset()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form className={`w-full lg:w-2/4 ${notoSansJp.className}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 grid gap-4">
        <div className="grid gap-1">
          <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 ">
            ニックネーム
          </label>
          <input
            id="name"
            type="text"
            className={`border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
              errors.name?.message && "bg-red-50 border border-red-500 text-red-500"
            }`}
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm font-medium">{errors.name?.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="title" className="block text-sm font-bold text-gray-900 ">
            タイトル
          </label>
          <input
            id="title"
            type="text"
            className={`border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
              errors.title?.message && "bg-red-50 border border-red-500 text-red-500"
            }`}
            {...register("title")}
          />
          {errors.title?.message && (
            <p className="text-red-500 text-sm font-medium">{errors.title?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rate" className="block mb-2 text-sm font-bold text-gray-900 ">
            評価
          </label>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <button
                key={index + 1}
                className={`flex items-center ${
                  index + 1 <= rate || index + 1 <= hoveredRate
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
                onMouseEnter={() => setHoveredRate(index + 1)}
                onMouseLeave={() => setHoveredRate(0)}
                onClick={() => handleSetRate(index + 1)}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={index + 1 <= rate || index + 1 <= hoveredRate ? "currentColor" : "#D1D5DB"}
                  className="mr-1 h-5 w-5 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ))}
            <input
              type="hidden"
              id="rate"
              {...register("rate", { valueAsNumber: true })}
              defaultValue={rate}
            />
          </div>
          {errors.rate?.message && (
            <p className="text-red-500 text-sm font-medium">{errors.rate?.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="description" className="block text-sm font-bold text-gray-900 ">
            レビューの内容
          </label>
          <input
            id="description"
            className={`border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
              errors.description?.message && "bg-red-50 border border-red-500 text-red-500"
            }`}
            {...register("description")}
          />
          {errors.description?.message && (
            <p className="text-red-500 text-sm font-medium">{errors.description?.message}</p>
          )}
        </div>
      </div>
      <div className="grid">
        <button type="submit" className="text-white font-bold">
          <div
            className={`${styles.button} h-12 px-8 w-full grid bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 items-center shadow-2xl cursor-pointer overflow-hidden transform hover:opacity-75 transition duration-300 ease-out`}
          >
            {isLoading && (
              <svg
                aria-hidden="false"
                role="status"
                className="inline w-full h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            レビューを投稿する
          </div>
        </button>
      </div>
    </form>
  )
}
