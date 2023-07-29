import { proteinRepo } from "../repos/proteins"

export type ProteinIdResponse = Awaited<ReturnType<typeof proteinRepo.fetchById>>
