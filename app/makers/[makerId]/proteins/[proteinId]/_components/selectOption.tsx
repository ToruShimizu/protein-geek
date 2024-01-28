"use client"

import { notoSansJp } from "@/app/_styles/fonts"
import { Flavor } from "types/responses"

type Props = {
  flavors: Flavor[]
  onChange: (id: string) => void
}

export default function SelectOption({ flavors, onChange }: Props) {
  return (
    <div className="grid gap-2">
      <label htmlFor="flavors" className={`font-bold text-sm md:text-base ${notoSansJp.className}`}>
        フレーバー
      </label>
      <select
        id="flavors"
        className={`border border-gray-300 focus:border-gray-300 focus:outline-none rounded-lg block w-full p-2 text-sm md:text-base  ${notoSansJp.className}`}
        defaultValue={flavors[0].id}
        onChange={(e) => onChange(e.target.value)}
      >
        {flavors.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
