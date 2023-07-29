import { proteinRepo } from "../repos/proteins"
import { UnWrapArray } from "./utils"

export type ProteinIdResponse = Awaited<ReturnType<typeof proteinRepo.fetchById>>
export type Protein = ProteinIdResponse["protein"]
export type Flavor = UnWrapArray<ProteinIdResponse["flavors"]>
export type Product = UnWrapArray<ProteinIdResponse["products"]>
export type Seller = UnWrapArray<ProteinIdResponse["sellers"]>
