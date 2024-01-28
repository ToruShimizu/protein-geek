"use client"

import { notoSansJp } from "@/app/_styles/fonts"
import { Flavor } from "types/responses"

type Props = {
  flavors: Flavor[]
  defaultValue: string
  label: string
  disabled?: boolean
  onChange: (id: string) => void
}

export default function SelectOption({
  flavors,
  onChange,
  defaultValue,
  disabled = false,
  label,
}: Props) {
  return (
    <div>
      <label htmlFor="flavors" className={`font-bold text-sm md:text-base ${notoSansJp.className}`}>
        {label}
      </label>
      <select
        id="flavors"
        className={`border border-gray-300 focus:border-gray-300 focus:outline-none rounded-lg block w-full p-2 text-sm md:text-base  ${notoSansJp.className}`}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {disabled && <option value="0">なし</option>}
        {flavors.map(({ name, id }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
