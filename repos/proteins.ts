import { getClient } from "../api/apollo/client"
import {
  ProteinByMakerIdDocument,
  ProteinByMakerIdQuery,
  ProteinByMakerIdQueryVariables,
  ProteinByIdQuery,
  ProteinByIdQueryVariables,
} from "../api/graphql/generated/graphql"

const client = getClient()

export const proteinRepo = {
  /**
   * 任意のメーカーに紐づくプロテイン一覧を取得する
   */
  fetchByMakerId: async (id: number) => {
    const {
      data: { proteinsCollection },
      error,
    } = await client.query<ProteinByMakerIdQuery, ProteinByMakerIdQueryVariables>({
      query: ProteinByMakerIdDocument,
      variables: { id },
    })
    if (error) throw error

    const proteins = proteinsCollection?.edges
    if (!proteins) throw new Error("Protein not found")

    return proteins
  },
  /**
   * 任意のプロテインを1件取得する
   */
  fetchById: async (id: number) => {
    const {
      data: { proteinsCollection },
      error,
    } = await client.query<ProteinByIdQuery, ProteinByIdQueryVariables>({
      query: ProteinByMakerIdDocument,
      variables: { id },
    })
    if (error) throw error

    const protein = proteinsCollection?.edges?.[0].node
    if (!protein) throw new Error("Protein not found")

    return protein
  },
}
