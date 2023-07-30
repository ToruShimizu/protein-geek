"use client"

type Props = {
  nutrients: any[]
}

export default function NutrientTable({ nutrients }: Props) {
  return (
    <table className="w-full text-sm text-left">
      <thead className="text-gray-700 bg-gray-50">
        <tr>
          <th className="px-6 py-4">成分名</th>
          <th className="px-6 py-4">1食あたり</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map((nutrient, index) => (
          <tr key={index} className="bg-white border-b">
            <td className="px-6 py-4 font-semibold text-gray-700">{nutrient.name}</td>
            <td className="px-6 py-4 text-gray-500">{nutrient.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
