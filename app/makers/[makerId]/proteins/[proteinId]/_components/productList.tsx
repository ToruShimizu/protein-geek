"use client"

import { Product } from "../../../../../../types/responses"

type Props = {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-2 bg-white border border-gray-200 rounded-lg shadow cursor-pointer"
        >
          {product.capacity}
        </li>
      ))}
    </ul>
  )
}
