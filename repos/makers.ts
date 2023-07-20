import { getClient } from "../api/apollo/client"
import {
  MakersQuery,
  MakersQueryVariables,
  MakersDocument,
  MakerByIdQuery,
  MakerByIdQueryVariables,
} from "../api/graphql/generated/graphql"

const client = getClient()

export const makerRepo = {
  /**
   * メーカー一覧を取得する
   */
  fetch: async () => {
    const { data, error } = await client.query<MakersQuery, MakersQueryVariables>({
      query: MakersDocument,
    })
    if (error) throw error
    const makers = data?.makersCollection?.edges?.map((edge) => edge?.node)
    return makers ?? []
  },
  /**
   * 任意のメーカーを1件取得する
   */
  fetchById: async (id: number) => {
    const {
      data: { makersCollection },
      error,
    } = await client.query<MakerByIdQuery, MakerByIdQueryVariables>({
      query: MakersDocument,
      variables: { id },
    })
    if (error) throw error

    const node = makersCollection?.edges?.[0]?.node
    if (!node) throw new Error("Maker not found")
    const proteins = node?.proteinsCollection?.edges?.map((edge) => edge?.node)
    return { maker: node, proteins }
  },
}
