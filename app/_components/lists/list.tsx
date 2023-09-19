type Props = {
  key: string | number
  children: React.ReactNode
}

export default function List({ children }: Props) {
  return <li className="grid gap-1 md:gap-2">{children}</li>
}
