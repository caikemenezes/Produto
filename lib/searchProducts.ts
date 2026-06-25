import { products } from "@/data/products";
import { Product, ProductCategory, SearchResult } from "@/types/product";

const CATEGORY_KEYWORDS: Record<ProductCategory, string[]> = {
  notebook: ["notebook", "laptop", "computador", "pc", "processador", "ram", "ssd", "programação", "trabalho", "estudar"],
  celular: ["celular", "smartphone", "iphone", "android", "telefone", "mobile", "samsung", "motorola"],
  camera: ["câmera", "camera", "foto", "fotografia", "vídeo", "video", "mirrorless", "dslr", "sony", "canon", "nikon", "youtuber"],
  geral: [],
};

const AI_MESSAGES: Record<ProductCategory, string> = {
  notebook: "Com base no que você procura, selecionei notebooks com bom custo-benefício, desempenho sólido e avaliações acima de 4.5 estrelas.",
  celular: "Analisei as melhores opções de smartphones para você, considerando desempenho, câmera, bateria e relação qualidade-preço.",
  camera: "Selecionei câmeras com alta avaliação, considerando o seu perfil — desde iniciantes até uso profissional.",
  geral: "Não identifiquei uma categoria específica, mas separei produtos bem avaliados que podem te interessar. Tente pesquisar por 'notebook', 'celular' ou 'câmera' para resultados mais precisos.",
};

function detectCategory(query: string): ProductCategory {
  const lower = query.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS) as [ProductCategory, string[]][]) {
    if (category === "geral") continue;
    if (keywords.some((kw) => lower.includes(kw))) {
      return category;
    }
  }

  return "geral";
}

function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): SearchResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      query: trimmed,
      aiMessage: AI_MESSAGES.geral,
      products: getProductsByCategory("geral"),
      category: "geral",
    };
  }

  const category = detectCategory(trimmed);
  const filtered = getProductsByCategory(category);

  return {
    query: trimmed,
    aiMessage: AI_MESSAGES[category],
    products: filtered,
    category,
  };
}
