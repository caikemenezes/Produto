import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  rank: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-medium text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

const RANK_BADGE: Record<number, { label: string; classes: string }> = {
  1: { label: "Melhor escolha", classes: "bg-blue-600 text-white" },
  2: { label: "Recomendado", classes: "bg-green-600 text-white" },
  3: { label: "Boa opção", classes: "bg-gray-600 text-white" },
};

export default function ProductCard({ product, rank }: ProductCardProps) {
  const badge = RANK_BADGE[rank] ?? RANK_BADGE[3];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badge.classes}`}>
            {badge.label}
          </span>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{product.store}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl font-extrabold text-blue-600">
            {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      {/* Rating */}
      <StarRating rating={product.rating} />

      {/* Pros / Cons */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 rounded-xl p-3">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Ponto forte</p>
          <p className="text-sm text-green-800">{product.pros}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Ponto fraco</p>
          <p className="text-sm text-red-700">{product.cons}</p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-blue-50 rounded-xl p-3">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Por que recomendamos</p>
        <p className="text-sm text-blue-800">{product.recommendation}</p>
      </div>

      {/* CTA */}
      <button className="mt-auto w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 19a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        Comprar agora
      </button>
    </div>
  );
}
