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

    const features = protein?.featuresCollection?.edges?.map((edge) => edge?.node)

    const flavors = protein?.flavorsCollection?.edges?.map((edge) => edge?.node)
    const sellers = flavors
      ?.map((flavor) => flavor?.sellersCollection?.edges?.map((edge) => edge?.node))
      .flatMap((seller) => seller ?? [])
    const products = flavors
      ?.map((flavor) => flavor?.productsCollection?.edges?.map((edge) => edge?.node))
      .flatMap((product) => product ?? [])

    if (!features || !flavors || !sellers || !products) throw new Error("not found")

    const combinedFlavors = flavors?.map((flavor) => {
      const filteredProducts = products.filter((seller) => seller.flavor_id === flavor.id)
      return {
        id: flavor.id,
        name: flavor.name,
        src: flavor.src,
        seller: sellers.find((seller) => seller.flavor_id === flavor.id)!,
        products: [...filteredProducts].sort((a, b) => b.capacity.localeCompare(a.capacity)),
      }
    })

    return {
      protein: {
        id: protein.id,
        name: protein.name,
        src: protein.src,
        flavors: combinedFlavors,
        features,
      },
    }
  },
}
