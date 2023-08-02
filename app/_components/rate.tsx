"use client"

import { varelaRound } from "../_styles/fonts"

type Rate = {
  rate: number
  count?: number
}

export default function Rate({ rate, count }: Rate) {
  return (
    <div className="flex items-center">
      <ul className="flex">
        {[...Array(rate)].map((_, i) => {
          return (
            <li key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i + 1 <= rate ? "currentColor" : "none"}
                className="mr-1 h-5 w-5 text-yellow-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          )
        })}
      </ul>
      {count !== undefined && (
        <p className={`text-sm text-slate-600 ${varelaRound.className}`}>({count})</p>
      )}
    </div>
  )
}
