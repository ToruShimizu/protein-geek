"use client"

import Image from "next/image"
import { useAtom } from "jotai"
import LinkButton from "@/app/_components/linkButton"
import PageTitle from "@/app/_components/pageTitle"
import Rate from "@/app/_components/rate"
import { notoSansJp, montSerrat } from "@/app/_styles/fonts"
import { staticUrl } from "_constants/urls"
import { createStaticUrl, convertKey, calculateRateAverage } from "modules/utils"
import { useMemo, useCallback, useEffect, Fragment } from "react"
import { flavorAtom, productAtom } from "stores/proteinAtom"
import { Protein, ShopKey, Product } from "types/responses"
import FactContainer from "../_templates/factContainer"
import FeatureList from "./featureList"
import ProductList from "./productList"
import SelectOption from "./selectOption"

type Props = {
  protein: Protein
}
const SHOP_KEYS = ["amazon", "yahoo", "rakuten", "official"] as ShopKey[]

export default function ProteinSection({ protein }: Props) {
  const [flavor, setFlavor] = useAtom(flavorAtom)
  const [product, setProduct] = useAtom(productAtom)

  const shopKeys = useMemo(
    () => Object.keys(flavor.seller).filter((key) => SHOP_KEYS.includes(key as ShopKey)),
    [flavor.seller],
  ) as ShopKey[]

  const price = useMemo(() => product.price, [product.price])
  const average = calculateRateAverage(protein.reviews)

  const onChange = useCallback(
    (id: string) => {
      const selectedFlavor = protein.flavors.find((flavor) => flavor.id === id)

      if (selectedFlavor) {
        setFlavor(selectedFlavor)
        setProduct(selectedFlavor.products[0])
      }
    },
    [setFlavor],
  )

  const onClick = useCallback(
    (product: Product) => {
      setProduct(product)
    },
    [setProduct],
  )

  useEffect(() => {
    setFlavor(protein.flavors[0])
    setProduct(protein.flavors[0].products[0])
  }, [])

  return (
    <section className="grid md:grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={createStaticUrl({
            baseUrl: staticUrl,
            src: protein.src,
          })}
          alt={protein.name}
          loading="eager"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="grid gap-2">
        <div>
          <PageTitle> {protein.name}</PageTitle>
          {protein.reviews.length > 0 && (
            <Rate rate={average} count={protein.reviews.length}></Rate>
          )}
        </div>
        <FeatureList features={protein.features} />
        <hr className="border-1" />
        <SelectOption
          flavors={protein.flavors}
          label="味"
          defaultValue={protein.flavors[0].id}
          onChange={onChange}
        />
        <div className="grid gap-2">
          <h3 className={`font-bold text-sm md:text-base ${notoSansJp.className}`}>サイズ</h3>
          <ProductList products={flavor.products} selectedProduct={product} onClick={onClick} />
        </div>
        <p className={`mb-3 font-bold text-lg lg:text-2xl ${montSerrat.className}`}>¥ {price}</p>
      </div>
      <FactContainer proteinId={protein.id} />

      <div>
        <ul className="grid gap-6">
          {shopKeys.map((key) => {
            const url = flavor.seller[key]
            return (
              <Fragment key={key}>
                {url && (
                  <li key={key}>
                    <LinkButton href={url}>{convertKey(key)}</LinkButton>
                  </li>
                )}
              </Fragment>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
