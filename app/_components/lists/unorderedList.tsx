type Props = {
  children: React.ReactNode
}

export default function UnorderedList({ children }: Props) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">{children}</ul>
  )
}
