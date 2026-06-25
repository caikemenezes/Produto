import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Shopper IA — Encontre o melhor produto sem abrir várias abas",
  description: "Pesquise uma vez e receba recomendações inteligentes comparando opções de diferentes lojas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
