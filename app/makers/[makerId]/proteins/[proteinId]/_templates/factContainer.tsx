import Accordion from "@/app/_components/accodions/accordion"
import AccordionItem from "@/app/_components/accodions/accordionItem"
import NutrientTable from "../_components/nutrientTable"
import { Fact } from "types/responses"

type Props = {
  fact: Fact
}

export default function FactContainer({ fact }: Props) {
  return (
    <Accordion id="protein-accordion">
      <AccordionItem title="概要" id="overview">
        {fact.summary}
      </AccordionItem>
      <AccordionItem title="使い方" id="usage">
        {fact.usage}
      </AccordionItem>
      <AccordionItem title="成分" id="component">
        <NutrientTable nutrients={fact.nutrients} />
      </AccordionItem>
    </Accordion>
  )
}
