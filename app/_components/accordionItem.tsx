"use client"
import { Collapse, initTE } from "tw-elements"
import { useEffect } from "react"
import { notoSansJp } from "../_styles/fonts"

type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ id, title, children }: Props) {
  useEffect(() => {
    initTE({ Collapse })
  }, [])
  return (
    <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white ">
      <h2 className="mb-0 font-bold text-lg" id={`accordion-heading-${id}`}>
        <button
          className={`group relative flex w-full items-center rounded-none border-0 bg-white px-2 py-4 text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none ${notoSansJp.className}`}
          type="button"
          data-te-collapse-init
          data-te-collapse-collapsed
          data-te-target={`#accordion-collapse-${id}`}
          aria-expanded="false"
        >
          {title}
          <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
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
      <div
        id={`accordion-collapse-${id}`}
        className="!visible hidden border-0"
        data-te-collapse-item
      >
        <div className={`px-2 py-4 whitespace-pre-wrap ${notoSansJp.className}`}>{children}</div>
      </div>
    </div>
  )
}
