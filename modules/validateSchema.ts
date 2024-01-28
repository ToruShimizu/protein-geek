import { z } from "zod"

export const reviewFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "ニックネームを入力してください" })
    .max(50, { message: "ニックネームは50文字以内で入力してください" }),
  title: z
    .string()
    .min(1, { message: "タイトルを入力してください" })
    .max(50, { message: "タイトルは50文字以内で入力してください" }),
  description: z
    .string()
    .min(1, { message: "レビュー内容を入力してください" })
    .max(250, { message: "レビュー内容は50文字以内で入力してください" }),
  rate: z.number().positive({ message: "評価を選択してください" }),
  flavor_id: z.string().optional(),
})

export type ReviewFormSchemaType = z.infer<typeof reviewFormSchema>
