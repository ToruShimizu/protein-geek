import { clientFactRepo } from "../repos/client/facts"
import { proteinRepo } from "../repos/proteins"
import { reviewRepo } from "../repos/reviews"
import { UnWrapArray } from "./utils"

export type ProteinIdResponse = Awaited<ReturnType<typeof proteinRepo.fetchById>>
export type ReviewByFlavorIdResponse = Awaited<ReturnType<typeof reviewRepo.fetchByFlavorIds>>
export type FactByProteinIdResponse = ReturnType<typeof clientFactRepo.fetchByProteinId>
export type Protein = ProteinIdResponse["protein"]
export type Fact = FactByProteinIdResponse["fact"]
export type Nutrient = UnWrapArray<Fact["nutrients"]>
export type Feature = UnWrapArray<Protein["features"]>
export type Flavor = UnWrapArray<Protein["flavors"]>
export type Product = UnWrapArray<Flavor["products"]>
export type Seller = Flavor["seller"]
export type Review = UnWrapArray<ReviewByFlavorIdResponse>
export type ShopKey = Extract<keyof Seller, "amazon" | "rakuten" | "yahoo" | "official">
