import { proteinRepo } from "../../../../../repos/proteins"
import Accordion from "../../../../_components/accordion"
import AccordionItem from "../../../../_components/accordionItem"
import LinkButton from "../../../../_components/linkButton"
import Rate from "../../../../_components/rate"
import ReviewCards from "../../../../_components/reviewCards"
import ReviewForm from "../../../../_components/reviewForm"

const DUMMY_REVIEWS = [
  {
    id: 1,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん",
    rate: 5,
    title: "とても美味しい",
  },
  {
    id: 2,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん2",
    rate: 1,
    title: "まずい",
  },
  {
    id: 3,
    description: "説明文説明文説明文説明文説明文説明文説明文説明文",
    name: "きんにくん3",
    rate: 3,
    title: "普通",
  },
]
export default async function Page({ params }: { params: { proteinId: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { protein, flavors, seller, products } = await proteinRepo.fetchById(
    Number(params.proteinId),
  )

  return (
    <main className="grid gap-16 md:gap-20">
      <section className="grid md:grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <img src={protein.src} alt={protein.name} />
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
          <div>
            {/* TODO: フレーバーの選択 */}
            <label htmlFor="flavors" className="font-bold text-sm md:text-base">
              フレーバー
            </label>
            <select
              id="flavors"
              className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm md:text-base"
              defaultValue="いちご"
            >
              {flavors &&
                flavors.map(({ name, id }) => (
                  <option key={id} value="いちご">
                    {name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            {/* TODO: 容量の選択 */}
            <h3 className="font-bold text-sm md:text-base">サイズ</h3>
            <ul className="grid grid-cols-2 gap-4">
              {products &&
                products.map((product) => (
                  <>
                    {product && (
                      <li
                        key={product.id}
                        className=" p-2 bg-white border border-gray-200 rounded-lg shadow cursor-pointer"
                      >
                        {product.capacity}
                      </li>
                    )}
                  </>
                ))}
            </ul>
          </div>
          <p className="mb-3 font-bold text-lg lg:text-2xl xl:text-3xl">¥料金</p>
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
          <div className="grid gap-6">
            <LinkButton href="/">公式サイト</LinkButton>
            <LinkButton href="/">amazon</LinkButton>
            <LinkButton href="/">yahoo</LinkButton>
          </div>
        </div>
      </section>
      <section className="grid gap-8">
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-4">
            選択された味のレビュー
          </h2>
          <hr className="border-1" />
        </div>
        <ReviewForm />
        <ReviewCards reviews={DUMMY_REVIEWS} />
      </section>
    </main>
  )
}
