"use client"

import { Feature } from "../../../../../../types/responses"

type Props = {
  features: Feature[]
}
export default function FeatureList({ features }: Props) {
  return (
    <ul>
      {features.map((feature) => (
        <li key={feature.id}>
          <span className="font-bold">・</span>
          {feature.description}
        </li>
      ))}
    </ul>
  )
}
