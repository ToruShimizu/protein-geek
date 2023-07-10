import Link from "next/link"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-50 p-4">
      <span className="block text-xs md:text-sm text-gray-500 text-center">
        © 2023&nbsp;
        <Link href="/" className="hover:underline">
          Protein The Star
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
