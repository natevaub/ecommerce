"use server"

import openDB from "@/lib/db"

export async function getAllProducts() {
  const db = await openDB();
  const products = await db.all('SELECT * FROM products WHERE brand = "Fender" AND model = "Telecaster"');
  return products;
}

export async function getProductById(productId: number) {
  const db = await openDB();
  const product = await db.get('SELECT * FROM products WHERE product_id = ?', [productId]);
  return product;
}