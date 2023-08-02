"use client"

import { Feature } from "../../../../../../types/responses"
import { notoSansJp } from "../../../../../_styles/fonts"

type Props = {
  features: Feature[]
}
export default function FeatureList({ features }: Props) {
  return (
    <ul>
      {features.map((feature) => (
        <li key={feature.id} className={`${notoSansJp.className}`}>
          <span className="font-bold">・</span>
          {feature.description}
        </li>
      ))}
    </ul>
  )
}
