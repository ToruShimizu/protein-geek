import { notoSansJp } from "@/app/_styles/fonts"
import { useState } from "react"
import dynamic from "next/dynamic"

const TECollapse = dynamic(() => import("tw-elements-react").then((res) => res.TECollapse))
type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ id, title, children }: Props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white mb-2">
      <h2 className="mb-0 font-bold text-lg" id={`accordion-heading-${id}`}>
        <button
          className={`group relative flex w-full items-center rounded-none  px-2 py-4 text-neutral-800  ${notoSansJp.className}`}
          type="button"
          onClick={() => setIsShow(!isShow)}
        >
          {title}
          <span className="ml-auto h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <TECollapse show={isShow} className="shadow-none">
        <div className={`px-2 pb-4 whitespace-pre-wrap ${notoSansJp.className} `}>{children}</div>
      </TECollapse>
    </div>
  )
}
