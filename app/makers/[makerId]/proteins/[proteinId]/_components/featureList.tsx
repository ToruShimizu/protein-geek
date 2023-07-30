"use client"

type Props = {
  features: any[]
}
export default function FeatureList({ features }: Props) {
  return (
    <ul>
      {features.map((feature) => (
        <li key={feature}>
          <span className="font-bold">・</span>
          {feature}
        </li>
      ))}
    </ul>
  )
}
