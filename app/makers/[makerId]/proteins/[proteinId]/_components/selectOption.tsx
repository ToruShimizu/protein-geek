"use client"

import { Flavor } from "../../../../../../types/responses"

type Props = {
  flavors: Flavor[]
  onChange: (id: string) => void
}

export default function SelectOption({ flavors, onChange }: Props) {
  return (
    <div>
      <label htmlFor="flavors" className="font-bold text-sm md:text-base">
        フレーバー
      </label>
      <select
        id="flavors"
        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm md:text-base"
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
