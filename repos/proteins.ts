import { getClient } from "../api/apollo/client"
import {
  ProteinByIdDocument,
  ProteinByIdQuery,
  ProteinByIdQueryVariables,
} from "../api/graphql/generated/graphql"

const client = getClient()

export const proteinRepo = {
  /**
   * 任意のプロテインを1件取得する
   */
  fetchById: async (id: number) => {
    const {
      data: { proteinsCollection },
      error,
    } = await client.query<ProteinByIdQuery, ProteinByIdQueryVariables>({
      query: ProteinByIdDocument,
      variables: { id },
    })
    if (error) throw error

    const protein = proteinsCollection?.edges?.[0].node
    if (!protein) throw new Error("Protein not found")

    const flavors = protein?.flavorsCollection?.edges?.map((edge) => edge?.node)
    const seller = flavors?.[0]?.sellersCollection?.edges?.[0]?.node
    const products = flavors
      ?.map((flavor) => flavor?.productsCollection?.edges?.[0]?.node)
      .flatMap((product) => product ?? [])

    if (!flavors || !seller || !products) throw new Error("not found")

    return { protein, flavors, seller, products }
  },
}
