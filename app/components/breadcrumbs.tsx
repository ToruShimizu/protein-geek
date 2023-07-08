"use client"
import Link from "next/link"

type Breadcrumb = {
  name: string
  href?: string
}

type Props = {
  lists: Breadcrumb[]
}

export default function Breadcrumbs({ lists }: Props) {
  return (
    <nav className="p-3 md:p-6" aria-label="Breadcrumb">
      <ol className="flex">
        {lists.map(({ name, href }, index) => (
          <>
            {index !== 0 && (
              <div className="flex items-center">
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
              </div>
            )}

            <li key={name} className="grid items-center">
              {href ? (
                <Link
                  href={href}
                  className="inline-flex items-center text-sm md:text-base font-medium  text-gray-400 hover:underline"
                >
                  {name}
                </Link>
              ) : (
                <span className="text-sm md:text-base font-medium  md:ml-2 text-gray-400">
                  {name}
                </span>
              )}
            </li>
          </>
        ))}
      </ol>
    </nav>
  )
}
