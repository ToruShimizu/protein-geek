import { Montserrat, Noto_Sans_JP, Varela_Round, Mochiy_Pop_One } from "next/font/google"

/**
 * サイト名
 */
export const mochiyPopOne = Mochiy_Pop_One({ weight: "400", subsets: ["latin"], display: "swap" })

/**
 * 主に英語表記で使うが、数字を太字で表現したい場合は数字でも使う
 */
export const montSerrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

/**
 * 日本語表記
 */
export const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

/**
 * 数字で使うが、数字を太文字で表現したいときには`montSerrat`を使う
 */
export const varelaRound = Varela_Round({ weight: "400", subsets: ["latin"], display: "swap" })
