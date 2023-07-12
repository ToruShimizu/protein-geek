import { getClient } from "../api/apollo/client"
import {
  ProteinByMakerIdDocument,
  ProteinByMakerIdQuery,
  ProteinByMakerIdQueryVariables,
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

    const proteins = proteinsCollection?.edges?.map((edge) => edge?.node)
    if (!proteins) throw new Error("Protein not found")

    return proteins
  },
}
