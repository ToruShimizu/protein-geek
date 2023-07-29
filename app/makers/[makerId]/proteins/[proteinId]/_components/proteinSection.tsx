"use client"
import { useSetAtom } from "jotai"
import Rate from "../../../../../_components/rate"
import SelectOption from "./selectOption"
import Accordion from "../../../../../_components/accordion"
import AccordionItem from "../../../../../_components/accordionItem"
import LinkButton from "../../../../../_components/linkButton"
import { Sellers } from "../../../../../../api/graphql/generated/graphql"
import { createStaticUrl } from "../../../../../../modules/utils"
import { Fragment, useCallback } from "react"
import { Flavor, Seller, Protein, Product } from "../../../../../../types/responses"
import { staticUrl } from "../../../../../../_constants/urls"
import { flavorAtom } from "../../../../../../stores/proteinAtom"
import ProductList from "./productList"

type Props = {
  flavors: Flavor[]
  products: Product[]
  protein: Protein
  seller: Seller
}
const SHOP_KEYS = ["amazon", "yahoo", "rakuten", "official"] as const
type ShopKey = Extract<keyof Sellers, (typeof SHOP_KEYS)[number]>

export default function ProteinSection({ flavors, products, protein, seller }: Props) {
  const setFlavor = useSetAtom(flavorAtom)

  const shopKeys = Object.keys(seller).filter(
    (key) => !["id", "__typename"].includes(key),
  ) as ShopKey[]

  const onChange = useCallback(
    (value: string) => {
      setFlavor(value)
    },
    [setFlavor],
  )
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
        <SelectOption flavors={flavors} onChange={onChange} />
        <div>
          {/* TODO: 容量の選択 */}
          <h3 className="font-bold text-sm md:text-base">サイズ</h3>
          <ProductList products={products} />
        </div>
        <p className="mb-3 font-bold text-lg lg:text-2xl">¥料金</p>
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

      <ul className="grid gap-6">
        {shopKeys.map((key) => {
          const url = seller[key]
          return (
            <Fragment key={key}>
              {url && (
                <li key={key}>
                  <LinkButton href={url}>{key}</LinkButton>
                </li>
              )}
            </Fragment>
          )
        })}
      </ul>
    </section>
  )
}
