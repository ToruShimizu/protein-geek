import { clientFactRepo } from "../../../../../../repos/facts"
import Accordion from "../../../../../_components/accordion"
import AccordionItem from "../../../../../_components/accordionItem"
import NutrientTable from "../_components/nutrientTable"

type Props = {
  proteinId: number
}

export default function FactContainer({ proteinId }: Props) {
  const { fact } = clientFactRepo.fetchByProteinId(proteinId)

  return (
    <>
      {fact && (
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
      )}
    </>
  )
}
