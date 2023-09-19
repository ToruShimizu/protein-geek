"use client"
import { useEffect } from "react"

type Props = {
  id: string
  children: React.ReactNode
}

export default function Accordion({ id, children }: Props) {
  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements")
      initTE({ Collapse })
    }
    init()
  }, [])
  return <div id={id}>{children}</div>
}
