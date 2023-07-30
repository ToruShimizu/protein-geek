import { useQuery } from "@apollo/client"
import {
  FactsByProteinIdDocument,
  FactsByProteinIdQuery,
  FactsByProteinIdQueryVariables,
} from "../api/graphql/generated/graphql"

export const clientFactRepo = {
  /**
   * プロテインに紐づく概要や栄養素などの情報を取得する
   */
  fetchByProteinId: (id: number) => {
    const { data, error } = useQuery<FactsByProteinIdQuery, FactsByProteinIdQueryVariables>(
      FactsByProteinIdDocument,
      {
        variables: { id },
      },
    )

    if (error) throw error
    const fact = data?.factsCollection?.edges?.[0]?.node

    const nutrients = fact?.nutrientsCollection?.edges?.map((edge) => edge?.node)

    return { fact: { id: fact?.id, summary: fact?.summary, usage: fact?.usage, nutrients } }
  },
}
