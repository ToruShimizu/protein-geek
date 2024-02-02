"use client"

type Props = {
  id: string
  children: React.ReactNode
}

export default function Accordion({ id, children }: Props) {
  return <div id={id}>{children}</div>
}
