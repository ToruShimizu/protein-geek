import Link from "next/link"

export default function Header() {
  return (
    <div>
      <header className="p-4 md:p-6">
        <h1 className="justify-center flex font-extrabold text-xl md:text-3xl">
          <Link href="/">Protein The Star</Link>
        </h1>
      </header>
      <hr className="border-1" />
    </div>
  )
}
