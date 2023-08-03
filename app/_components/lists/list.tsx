type Props = {
  key: string | number
  children: React.ReactNode
}

export default function List({ key, children }: Props) {
  return (
    <li key={key} className="grid gap-1 md:gap-2">
      {children}
    </li>
  )
}
