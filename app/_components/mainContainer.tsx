import Breadcrumbs, { Breadcrumb } from "./breadcrumbs"

type Props = {
  lists: Breadcrumb[]
  children: JSX.Element
}

export default function MainContainer({ lists, children }: Props) {
  return (
    <main className="grid gap-16 md:gap-20">
      <Breadcrumbs lists={lists} />
      {children}
    </main>
  )
}
