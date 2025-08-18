import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganhando com o Digital - Faturando com Vendas Automáticas",
  description: "Descubra como vender produtos digitais automaticamente no Instagram com robôs que trabalham 24h por dia. Acesso imediato ao curso completo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/ico/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png" />
        <link rel="manifest" href="/ico/site.webmanifest" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJ0JE4VZ9H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QJ0JE4VZ9H');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
