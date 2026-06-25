export type ProductCategory = "notebook" | "celular" | "camera" | "geral";

export interface Product {
  id: string;
  name: string;
  store: string;
  price: number;
  rating: number;
  pros: string;
  cons: string;
  recommendation: string;
  category: ProductCategory;
  imageUrl?: string;
}

export interface SearchResult {
  query: string;
  aiMessage: string;
  products: Product[];
  category: ProductCategory;
}
