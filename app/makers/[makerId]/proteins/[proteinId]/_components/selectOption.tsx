"use client"

import { ProteinIdResponse } from "../../../../../../types/responses"

type Props = {
  flavors: ProteinIdResponse["flavors"]
}

export default function SelectOption({ flavors }: Props) {
  return (
    <div>
      <label htmlFor="flavors" className="font-bold text-sm md:text-base">
        フレーバー
      </label>
      <select
        id="flavors"
        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm md:text-base"
        defaultValue={flavors[0].name}
      >
        {flavors.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
