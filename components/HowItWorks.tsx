const steps = [
  {
    number: "01",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
    ),
    title: "Você pesquisa uma vez",
    description: "Digite o que você quer comprar em linguagem natural, como falaria com um amigo.",
  },
  {
    number: "02",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "A IA compara as opções",
    description: "Nosso sistema analisa produtos de diferentes lojas, avaliações e custo-benefício automaticamente.",
  },
  {
    number: "03",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Você compra com mais segurança",
    description: "Receba recomendações claras com prós, contras e o motivo de cada indicação.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Simples assim</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Como funciona</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Em 3 passos você sai do zero para a melhor decisão de compra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-100 z-0" />
              )}

              <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md mb-5">
                {step.icon}
              </div>

              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">{step.number}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
