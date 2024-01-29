import Link from "next/link"
import { oswald } from "@/app/_styles/fonts"

export default function Header() {
  return (
    <div>
      <header className="p-4 md:p-6">
        <h1
          className={`justify-center flex font-extrabold text-xl md:text-3xl ${oswald.className}`}
        >
          <Link href="/">リアルプロテイン</Link>
        </h1>
      </header>
      <hr className="border-1" />
    </div>
  )
}
