export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  brand: string;
  model: string;
  collection: string;
  sku: string;
  price: number;
  stock_quantity: number;
  created_at: string; // Assuming timestamp is returned as string
  updated_at: string; // Assuming timestamp is returned as string
  image_url : string;
}

export interface Model {
  name: string;
  image_url: string;
}

export interface Category {
  name: string;
  image_url: string;
}

export interface FilterCategory {
  allBrands: string[];
  allModels: string[];
  allSeries: string[];
  allColors: string[];
  allPrices: string[];
}

export interface FilterQuery {
  brands: string[];
  models: string[];
  series: string[];
  colors: string[];
  prices: string[];
}

export interface CategoryProps {
  onHover: (category: string) => void;
  hoveredCategory: string;
  onFlyout: (active: boolean) => void;
}
