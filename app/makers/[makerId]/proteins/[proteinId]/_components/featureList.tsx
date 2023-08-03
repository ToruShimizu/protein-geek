"use client"

import { notoSansJp } from "@/app/_styles/fonts"
import { Feature } from "types/responses"

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
