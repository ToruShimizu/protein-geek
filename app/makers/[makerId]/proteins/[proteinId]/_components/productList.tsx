"use client"

import { varelaRound } from "@/app/_styles/fonts"
import { Product } from "types/responses"

type Props = {
  products: Product[]
  selectedProduct: Product
  onClick: (product: Product) => void
}

export default function ProductList({ products, selectedProduct, onClick }: Props) {
  const selectedProductId = selectedProduct?.id ?? products[0].id

  const baseClassNames = `p-2 bg-white border border-gray-200 rounded-lg shadow  ${
    varelaRound.className
  } ${products.length > 1 ? "hover:border-2 hover:border-gray-500 cursor-pointer" : ""}`

  return (
    <ul className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <li
          key={product.id}
          className={`${baseClassNames} ${
            products.length > 1 && selectedProductId === product.id && "border-2 border-gray-500"
          }`}
          onClick={() => onClick(product)}
        >
          {product.capacity}
        </li>
      ))}
    </ul>
  )
}
