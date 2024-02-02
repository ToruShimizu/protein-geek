import Link from "next/link"
import { concertOne } from "@/app/_styles/fonts"

export default function Header() {
  return (
    <div>
      <header className="p-4 md:p-6">
        <h1 className={`flex font-extrabold text-xl md:text-3xl ${concertOne.className}`}>
          <Link href="/" aria-label="メーカー一覧へ">
            Protein Geek
          </Link>
        </h1>
      </header>
      <hr className="border-1" />
    </div>
  )
}
