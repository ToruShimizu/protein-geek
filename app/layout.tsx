import Header from "@/app/_components/header"
import Footer from "@/app/_components/footer"

import "@/app/_styles/reset.css"
import "@/app/_styles/globals.css"
import { ApolloWrapper } from "api/apollo/apollo-wrapper"

export const metadata = {
  title: "Protein Geek",
  description:
    "プロテインを徹底的に評価するレビューサイト。様々なブランドや味のプロテインを紹介しており、プロテイン選びの参考になる情報が満載です",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ApolloWrapper>
          <Header />
          <div className="p-5 md:py-8 md:px-16 lg:px-32 mb-20">{children}</div>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}
