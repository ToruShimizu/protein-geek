import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const { href } = new URL("/makers", request.url)

  redirect(href)
}
