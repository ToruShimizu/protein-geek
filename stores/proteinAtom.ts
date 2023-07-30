import { atom } from "jotai"
import { Product, Flavor } from "../types/responses"

export const flavorAtom = atom<Flavor>({
  id: 0,
  name: "",
  src: "",
  products: [],
  seller: {
    id: 0,
    official: "",
    flavor_id: 0,
  },
})

export const productAtom = atom<Product>({
  __typename: "products",
  id: 0,
  price: "",
  capacity: "",
})
