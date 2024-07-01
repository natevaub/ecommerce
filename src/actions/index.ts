"use server"
import { } from "@/types/types";

import openDB from "@/lib/db"

/**
 * Retrieves all products from the database, each with its main image.
 * 
 * @returns A promise that resolves to an array of products. Each product is an object that includes its main image.
 * @throws Will throw an error if the database query fails.
 */
export async function getAllProductsWithMainImage() {
  //console.log('Retrieving all products with main image');
  const database = await openDB();

  try {
    const productsWithMainImage = await database.all(
      `SELECT * FROM products 
      INNER JOIN images ON products.id = images.product_id 
      WHERE images.image_type = "main"`
    );
    //console.log('Database query executed');

    //console.log(productsWithMainImage);

    return productsWithMainImage;

  } catch (err) {
    console.error('Error executing database query', err);
  }
}

/**
 * Retrieves all products of a specific model from the database.
 * Each product includes its main image.
 * 
 * @param modelName - The name of the model to retrieve products for.
 * @returns A promise that resolves to an array of products. Each product is an object that includes its main image.
 * @throws Will throw an error if the database query fails.
 */
export async function getProductsByModel(modelName: string) {
  //console.log(`Retrieving products for model: ${modelName}`);
  const database = await openDB();

  try {
    const productsWithMainImage = await database.all(
      `SELECT * FROM products 
      INNER JOIN images ON products.id = images.product_id 
      WHERE products.model = ? AND images.images_type = "main"`, 
      [modelName]
    );
    //console.log('Database query executed');

    //console.log(productsWithMainImage);

    return productsWithMainImage;

  } catch (err) {
    console.error('Error executing database query', err);
  }
}

/**
 * Retrieves all unique brands from the products table in the database.
 * 
 * @returns A promise that resolves to an array of unique brands. Each brand is a string.
 * @throws Will throw an error if the database query fails.
 */
export async function getAllUniqueBrands() {
  //console.log('Retrieving all unique brands');
  const database = await openDB();

  try {
    const brands = await database.all(`SELECT DISTINCT brand FROM products`);
    //console.log('Database query executed');

    //console.log(brands); // log the result to see if it's what you expect

    return brands.map((row) => row.brand); // return an array of brand strings

  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}

/**
 * Retrieves all unique models from the products table in the database.
 * 
 * @returns A promise that resolves to an array of unique models. Each model is a string.
 * @throws Will throw an error if the database query fails.
 */
export async function getAllUniqueModels() {
  //console.log('Retrieving all unique models');
  const database = await openDB();

  try {
    const models = await database.all(`SELECT DISTINCT model FROM products`);
    //console.log('Database query executed');

    //console.log(models); // log the result to see if it's what you expect

    return models.map((row) => row.model); // return an array of model strings

  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}

/**
 * Retrieves all unique series from the products table in the database.
 * 
 * @returns A promise that resolves to an array of unique series. Each series is a string.
 * @throws Will throw an error if the database query fails.
 */
export async function getAllUniqueSeries() {
  //console.log('Retrieving all unique collection');
  const database = await openDB();

  try {
    const collection = await database.all(`SELECT DISTINCT collection FROM products`);
    //console.log('Database query executed');

    console.log(collection); // log the result to see if it's what you expect

    return collection.map((row) => row.collection); // return an array of series strings

  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}