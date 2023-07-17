"use client"
import Link from "next/link"

import styles from "../_styles/animation.module.css"

type Props = {
  href: string
  children: React.ReactNode
}

export default function LinkButton({ href, children }: Props) {
  return (
    <div className="b h-16 w-full max-w-lg grid items-center relative mx-auto px-8">
      <div
        className={`${styles.button} h-16 w-full max-w-lg bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 items-center shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 hover:opacity-75 transition duration-300 ease-out`}
      ></div>
      <Link href={href} className="text-white font-bold z-10 pointer-events-none">
        <div className="flex items-center justify-center">
          <p className="ml-auto">{children}</p>
          <svg
            className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x ml-auto"
            aria-hidden="true"
            focusable="false"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}
