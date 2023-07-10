import { getClient } from "../api/apollo/client"
import { MakersQuery, MakersQueryVariables, MakersDocument } from "../api/graphql/generated/graphql"

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
}
