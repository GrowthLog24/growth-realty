import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growth-realty.kr"),
  title: "그로스리얼티(주) | 서울 부동산 개발·자산이동·PM 컨설팅",
  description:
    "17년 현장 경험. 제도·법률·도시계획 기반 위에 실무를 쌓아온 부동산 컨설턴트. 신축·리모델링·자산이동·PM·특수물건. 조용히, 그러나 끝까지 실행합니다.",
  keywords: [
    "부동산 컨설팅",
    "신축 개발",
    "리모델링",
    "자산이동",
    "PM",
    "서울 부동산",
    "상업용 빌딩",
    "그로스리얼티",
  ],
  authors: [{ name: "그로스리얼티(주)" }],
  openGraph: {
    title: "그로스리얼티(주)",
    description: "서울 핵심 권역 부티끄 부동산 컨설팅.",
    url: "https://growth-realty.kr",
    siteName: "그로스리얼티(주)",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "그로스리얼티(주) - 서울 부동산 컨설팅",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "그로스리얼티(주)",
    description: "서울 핵심 권역 부티끄 부동산 컨설팅.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKR.variable} ${notoSansKR.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "그로스리얼티(주)",
              description: "서울 핵심 권역 부동산 개발·자산이동·PM 컨설팅",
              url: "https://growth-realty.kr",
              telephone: "010-2130-5512",
              email: "contact@growth-realty.kr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "강남대로 84길 23, 한라클래식 1703-2호",
                addressLocality: "강남구",
                addressRegion: "서울특별시",
                postalCode: "06233",
                addressCountry: "KR",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
