import { getClient } from "api/apollo/client"
import {
  FactsByProteinIdDocument,
  FactsByProteinIdQuery,
  FactsByProteinIdQueryVariables,
} from "api/graphql/generated/graphql"
const client = getClient()

export const factRepo = {
  /**
   * プロテインに紐づく概要や栄養素などの情報を取得する
   */
  fetchByProteinId: async (id: number) => {
    const { data, error } = await client.query<
      FactsByProteinIdQuery,
      FactsByProteinIdQueryVariables
    >({
      query: FactsByProteinIdDocument,
      variables: { id },
    })

    if (error) throw error
    const fact = data?.factsCollection?.edges?.[0]?.node

    const nutrients = fact?.nutrientsCollection?.edges?.map((edge) => edge?.node)

    return { fact: { id: fact?.id, summary: fact?.summary, usage: fact?.usage, nutrients } }
  },
}
