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
