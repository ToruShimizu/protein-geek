import { useForm } from "react-hook-form"
import { reviewFormSchema, ReviewFormSchemaType } from "../modules/validateSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormSchemaType>({
    resolver: zodResolver(reviewFormSchema),
  })

  const onSubmit = (data: ReviewFormSchemaType) => {
    console.log(data)
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}
