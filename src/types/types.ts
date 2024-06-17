export interface Product {
  product_id: number;
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
}

export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  mainImage: string;
}

export interface ProductsInfos {
  name: string;
  price: number;
  mainImage: string;
}