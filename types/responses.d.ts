import { proteinRepo } from "../repos/proteins"
import { UnWrapArray } from "./utils"

export type ProteinIdResponse = Awaited<ReturnType<typeof proteinRepo.fetchById>>
export type Protein = ProteinIdResponse["protein"]
export type Feature = UnWrapArray<Protein["features"]>
export type Flavor = UnWrapArray<Protein["flavors"]>
export type Product = UnWrapArray<Flavor["products"]>
export type Seller = Flavor["seller"]
export type ShopKey = Extract<keyof Seller, "amazon" | "rakuten" | "yahoo" | "official">
