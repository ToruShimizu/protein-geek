import { atom } from "jotai"
import { Product } from "../types/responses"

export const flavorAtom = atom<string>("")

export const productAtom = atom<Product>({
  __typename: "products",
  id: 0,
  price: "",
  capacity: "",
})
