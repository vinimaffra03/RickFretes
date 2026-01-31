import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RickFretes — Fretes e Mudancas em Curitiba e Regiao",
  description:
    "Frete e mudanca com caminhao em Curitiba e regiao metropolitana. Orcamento automatico, preco justo e atendimento via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9373180671674294" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9373180671674294"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
