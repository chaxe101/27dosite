import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import dynamic from "next/dynamic"

// Carregamento dinâmico do chatbot para reduzir o peso inicial
const AIChatbot = dynamic(() => import("@/components/ai-chatbot"), {
  loading: () => null,
  ssr: false,
})

// Carregamento dinâmico do navbar para evitar problemas de renderização
const Navbar = dynamic(() => import("@/components/navbar"), {
  loading: () => (
    <div className="h-16 w-full border-b bg-white shadow-sm flex items-center px-4">
      <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
    </div>
  ),
  ssr: false, // Importante: evita renderização dupla do contexto
})

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "VrumGo - Aluguel de Carros e Motos",
  description:
    "Plataforma segura para aluguel de carros e motos entre pessoas. Cadastre seu veículo ou encontre o ideal para alugar.",
  keywords: "aluguel de carros, aluguel de motos, compartilhamento de veículos, peer-to-peer, VrumGo",
  authors: [{ name: "VrumGo Team" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
  openGraph: {
    title: "VrumGo - Aluguel de Carros e Motos",
    description: "Plataforma segura para aluguel de carros e motos entre pessoas",
    url: "https://vrumgo.com.br",
    siteName: "VrumGo",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'