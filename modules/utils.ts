import { ShopKey } from "../types/responses"

/**
 * @description 画像のURLを生成する
 * @param baseUrl 画像のベースURL
 * @param src 画像のパス
 * @return 画像のURL
 */
export const createStaticUrl = ({ baseUrl, src }: { baseUrl?: string; src: string }) => {
  if (!baseUrl) return ""
  return new URL(src, baseUrl).href
}

/**
 * @description リンクボタンのテキストに変換する
 * @param key ショップのkey
 * @return ショップ名
 */
export const convertKey = (key: ShopKey) => {
  switch (key) {
    case "amazon":
      return "Amazon"
    case "rakuten":
      return "楽天市場"
    case "yahoo":
      return "Yahoo!ショッピング"
    case "official":
      return "公式サイト"
  }
}
