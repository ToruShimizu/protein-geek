import { montSerrat } from "@/app/_styles/fonts"

type Props = {
  children: React.ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h2 className={`text-xl lg:text-3xl font-bold pb-6 ${montSerrat.className}`}>{children}</h2>
  )
}
