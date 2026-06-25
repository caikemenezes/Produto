"use client";

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import ProductCard from "@/components/ProductCard";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import { searchProducts } from "@/lib/searchProducts";
import { SearchResult } from "@/types/product";

function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-lg">Personal Shopper <span className="text-blue-600">IA</span></span>
        </div>
        <span className="hidden sm:inline-block text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full border border-blue-100">
          MVP v1.0
        </span>
      </div>
    </nav>
  );
}

function HeroSection({ onSearch, isLoading }: { onSearch: (q: string) => void; isLoading: boolean }) {
  return (
    <section className="pt-32 pb-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-100 mb-8">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Recomendações inteligentes com IA
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Encontre o melhor produto{" "}
          <span className="text-blue-600">sem abrir várias abas</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Pesquise uma vez e receba recomendações inteligentes comparando opções de diferentes lojas.
        </p>

        <div className="mt-10">
          <SearchBox onSearch={onSearch} isLoading={isLoading} />
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Tente: <button className="text-blue-500 hover:underline" onClick={() => onSearch("notebook para programação")}>notebook para programação</button>
          {" · "}
          <button className="text-blue-500 hover:underline" onClick={() => onSearch("melhor celular custo-benefício")}>melhor celular</button>
          {" · "}
          <button className="text-blue-500 hover:underline" onClick={() => onSearch("câmera para youtube")}>câmera para youtube</button>
        </p>
      </div>
    </section>
  );
}

function ResultsSection({ result, onReset }: { result: SearchResult; onReset: () => void }) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* AI message banner */}
        <div className="flex items-start gap-4 bg-blue-600 text-white rounded-2xl p-5 mb-10 shadow-sm">
          <div className="shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm opacity-80 mb-0.5">Analisei as melhores opções para você</p>
            <p className="text-white/90 text-base">{result.aiMessage}</p>
          </div>
        </div>

        {/* Query info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Resultados para:{" "}
              <span className="text-blue-600 font-semibold">&ldquo;{result.query}&rdquo;</span>
            </h2>
            <p className="text-sm text-gray-400 mt-0.5">{result.products.length} produtos encontrados</p>
          </div>
          <button
            onClick={onReset}
            className="self-start sm:self-auto flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-xl transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            Nova pesquisa
          </button>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.products.map((product, i) => (
            <ProductCard key={product.id} product={product} rank={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="font-bold text-gray-800">Personal Shopper IA</span>
        </div>
        <p className="text-sm text-gray-400">
          MVP v1.0 — Recomendações simuladas. Nenhuma API externa utilizada.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(query: string) {
    setIsLoading(true);
    // Simulate async AI processing delay
    setTimeout(() => {
      const searchResult = searchProducts(query);
      setResult(searchResult);
      setIsLoading(false);
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 800);
  }

  function handleReset() {
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <NavBar />
      <HeroSection onSearch={handleSearch} isLoading={isLoading} />

      {isLoading && (
        <div className="flex flex-col items-center py-16 gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">A IA está analisando as melhores opções...</p>
        </div>
      )}

      {result && !isLoading && (
        <div id="results">
          <ResultsSection result={result} onReset={handleReset} />
        </div>
      )}

      {!result && !isLoading && (
        <>
          <HowItWorks />
          <Benefits />
        </>
      )}

      <Footer />
    </main>
  );
}
