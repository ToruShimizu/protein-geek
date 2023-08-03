import Link from "next/link"
import { reggaeOne, montSerrat } from "../_styles/fonts"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-50 p-4">
      <span
        className={`block text-xs md:text-sm text-gray-500 text-center ${montSerrat.className} `}
      >
        © 2023&nbsp;
        <Link href="/" className={`hover:underline ${reggaeOne.className}`}>
          プロテインザスター
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
