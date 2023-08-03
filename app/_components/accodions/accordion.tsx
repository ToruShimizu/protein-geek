"use client"
import { Collapse, initTE } from "tw-elements"
import { useEffect } from "react"

type Props = {
  id: string
  children: React.ReactNode
}

export default function Accordion({ id, children }: Props) {
  useEffect(() => {
    initTE({ Collapse })
  }, [])
  return <div id={id}>{children}</div>
}
