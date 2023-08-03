"use client"

import { notoSansJp, varelaRound } from "@/app/_styles/fonts"
import { Nutrient } from "types/responses"

type Props = {
  nutrients?: Nutrient[]
}

export default function NutrientTable({ nutrients }: Props) {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-gray-700 bg-gray-50">
        <tr className={`${notoSansJp.className}`}>
          <th className="px-6 py-4">成分名</th>
          <th className="px-6 py-4">1食あたり</th>
        </tr>
      </thead>
      <tbody>
        {nutrients?.map((nutrient, index) => (
          <tr key={index} className="bg-white border-b">
            <td className={`px-6 py-4 font-semibold text-gray-700 ${notoSansJp.className}`}>
              {nutrient.name}
            </td>
            <td className={`px-6 py-4 text-gray-500 ${varelaRound.className}`}>
              {nutrient.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
