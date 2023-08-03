"use client"
import Link from "next/link"
import { montSerrat } from "../_styles/fonts"

export type Breadcrumb = {
  name: string
  icon?: JSX.Element
  href?: string
}

type Props = {
  lists: Breadcrumb[]
}

export default function Breadcrumbs({ lists }: Props) {
  const baseTextStyle = `text-sm md:text-base font-medium text-gray-700 
  text-gray-700 ${montSerrat.className}`
  return (
    <nav className="p-3 md:p-6 overflow-x-auto" aria-label="Breadcrumb">
      <ol className="grid auto-cols-max grid-flow-col gap-1">
        {lists.map(({ name, href, icon }, index) => (
          <li key={name} className="grid auto-cols-max grid-flow-col items-center">
            {index > 0 && (
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}

            {href ? (
              <Link href={href} className={`hover:underline hover:opacity-75 ${baseTextStyle}`}>
                {icon ?? name}
              </Link>
            ) : (
              <span className={baseTextStyle}>{icon ?? name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
