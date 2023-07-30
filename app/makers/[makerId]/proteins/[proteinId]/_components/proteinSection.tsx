"use client"
import { useAtom } from "jotai"
import Rate from "../../../../../_components/rate"
import SelectOption from "./selectOption"
import Accordion from "../../../../../_components/accordion"
import AccordionItem from "../../../../../_components/accordionItem"
import LinkButton from "../../../../../_components/linkButton"
import { convertKey, createStaticUrl } from "../../../../../../modules/utils"
import { Fragment, useCallback, useEffect, useMemo } from "react"
import { Product, Protein, ShopKey } from "../../../../../../types/responses"
import { staticUrl } from "../../../../../../_constants/urls"
import { flavorAtom, productAtom } from "../../../../../../stores/proteinAtom"
import ProductList from "./productList"

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
        <img
          src={createStaticUrl({
            baseUrl: staticUrl,
            src: protein.src,
          })}
          alt={protein.name}
        />
      </div>
      <div className="grid gap-2">
        <div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4">
            {protein.name}
          </h2>
          <Rate rate={3} count={50}></Rate>
        </div>
        <ul>
          <li>特徴1</li>
          <li>特徴2</li>
          <li>特徴3</li>
        </ul>
        <hr className="border-1" />
        <SelectOption flavors={protein.flavors} onChange={onChange} />
        <div>
          <h3 className="font-bold text-sm md:text-base">サイズ</h3>
          <ProductList products={flavor.products} selectedProduct={product} onClick={onClick} />
        </div>
        <p className="mb-3 font-bold text-lg lg:text-2xl">¥ {price}</p>
      </div>
      <Accordion id="protein-accordion">
        <AccordionItem title="概要" id="overview">
          概要
        </AccordionItem>
        <AccordionItem title="使い方" id="usage">
          使い方
        </AccordionItem>
        <AccordionItem title="成分" id="component">
          成分
        </AccordionItem>
      </Accordion>

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
