"use server"
import { ProductInfo } from "@/types/types";

import openDB from "@/lib/db"

export async function getAllProducts() {
  const db = await openDB();
  const products = await db.all('SELECT * FROM products WHERE brand = "Fender" AND model = "Telecaster"');
  return products;
}

// Images from db are related to a productId, 
// Images are labeled by type : ex: main, hr-front...
// Goal of this function is to access: name + price + main-image
export async function getProductInfo(productId: number): Promise<ProductInfo> {
  console.log("getProductInfo called with productId: ", productId);
  const db = await openDB();
  const product = await db.get('SELECT name, price FROM products WHERE product_id = ?', [productId]);
  const mainImage = await db.get('SELECT image_url FROM images WHERE product_id = ? AND image_type = "main"', [productId]);
  console.log("Server Test: ", mainImage);
  console.log("Server Test: ", product.name);
  return {
    name: product.name,
    price: product.price,
    mainImage: mainImage.image_url
  };
}