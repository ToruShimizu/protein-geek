import { Montserrat, Noto_Sans_JP, Varela_Round, Concert_One } from "next/font/google"

/**
 * サイト名
 */
export const concertOne = Concert_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

/**
 * 主に英語表記で使うが、数字を太字で表現したい場合は数字でも使う
 */
export const montSerrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

/**
 * 日本語表記
 */
export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

/**
 * 数字で使うが、数字を太文字で表現したいときには`montSerrat`を使う
 */
export const varelaRound = Varela_Round({ weight: "400", subsets: ["latin"], display: "swap" })
