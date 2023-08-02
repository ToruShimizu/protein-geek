import { clientFactRepo } from "../repos/facts"
import { proteinRepo } from "../repos/proteins"
import { clientReviewRepo } from "../repos/reviews"
import { UnWrapArray } from "./utils"

export type ProteinIdResponse = Awaited<ReturnType<typeof proteinRepo.fetchById>>
export type FactByProteinIdResponse = ReturnType<typeof clientFactRepo.fetchByProteinId>
export type ReviewByFlavorIdResponse = ReturnType<typeof clientReviewRepo.fetchByFlavorIds>
export type Protein = ProteinIdResponse["protein"]
export type Fact = FactByProteinIdResponse["fact"]
export type Nutrient = UnWrapArray<Fact["nutrients"]>
export type Feature = UnWrapArray<Protein["features"]>
export type Fact = ProteinIdResponse["fact"]
export type Flavor = UnWrapArray<Protein["flavors"]>
export type Product = UnWrapArray<Flavor["products"]>
export type Seller = Flavor["seller"]
export type Review = UnWrapArray<ReviewByFlavorIdResponse>
export type ShopKey = Extract<keyof Seller, "amazon" | "rakuten" | "yahoo" | "official">
