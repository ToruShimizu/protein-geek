/**
 * @description 画像のURLを生成する
 * @param baseUrl 画像のベースURL
 * @param src 画像のパス
 * @return 画像のURL
 */
export const createStaticUrl = ({ baseUrl, src }: { baseUrl?: string; src: string }) => {
  if (!baseUrl) return ""
  return `${baseUrl}${src}`
}
