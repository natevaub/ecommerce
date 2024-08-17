"use server"
import { } from "@/types/types";
import { parsedPricesRanges } from "./utils";

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
      WHERE products.model = ? AND images.image_type = "main"`,
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

export async function getBrandsBasedOnActiveFilters(activeModels: string[], activeSeries: string[]): Promise<string[]> {
  const database = await openDB();
  let query = "SELECT DISTINCT model FROM products";
  let conditions = [];
  let params = [];

  if (activeModels.length > 0) {
    conditions.push('products.brand IN (' + '?,'.repeat(activeModels.length).slice(0, -1) + ')');
    console.log('Conditions:', conditions);
    params.push(...activeModels);
  }

  if (activeSeries.length > 0) {
    conditions.push('products.collection IN (' + '?,'.repeat(activeSeries.length).slice(0, -1) + ')');
    console.log('Conditions:', conditions);
    params.push(...activeSeries);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  try {
    const models = await database.all(query, params);
    console.log(`Query = ${query}`)
    return models.map((row) => row.model);
  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}

export async function getModelsBasedOnActiveFilters(activeBrands: string[], activeSeries: string[]): Promise<string[]> {
  const database = await openDB();
  let query = "SELECT DISTINCT model FROM products";
  let conditions = [];
  let params = [];

  if (activeBrands.length > 0) {
    conditions.push('products.brand IN (' + '?,'.repeat(activeBrands.length).slice(0, -1) + ')');
    console.log('Conditions:', conditions);
    params.push(...activeBrands);
  }

  if (activeSeries.length > 0) {
    conditions.push('products.collection IN (' + '?,'.repeat(activeSeries.length).slice(0, -1) + ')');
    console.log('Conditions:', conditions);
    params.push(...activeSeries);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  try {
    const models = await database.all(query, params);
    console.log(`Query = ${query}`)
    return models.map((row) => row.model);
  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}

export async function getSeriesBadsedOnActiveFilters(activeBrands: string[], activeModels: string[]): Promise<string[]> {
  const database = await openDB();

  let query = "SELECT DISTINCT collection FROM products";
  let conditions = [];
  let params = [];

  if (activeBrands.length > 0) {
    conditions.push('products.brand IN (' + '?,'.repeat(activeBrands.length).slice(0, -1) + ')');
    params.push(...activeBrands);
  }

  if (activeModels.length > 0) {
    conditions.push('products.model IN (' + '?,'.repeat(activeModels.length).slice(0, -1) + ')');
    params.push(...activeModels);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  try {
    const series = await database.all(query, params);
    console.log(`Query = ${query}`)
    return series.map((row) => row.collection);
  } catch (err) {
    console.error('Error executing database query', err);
    return [];
  }
}

export async function getFilteredProducts(brands: string[], models: string[], series: string[], prices: string[]) {
  const database = await openDB();

  let query = 'SELECT * FROM products INNER JOIN images ON products.id = images.product_id WHERE images.image_type = "main"';
  let params = [];

  if (brands.length > 0) {
    query += ' AND products.brand IN (' + '?,'.repeat(brands.length).slice(0, -1) + ')';
    params.push(...brands);
  }

  if (models.length > 0) {
    query += ' AND products.model IN (' + '?,'.repeat(models.length).slice(0, -1) + ')';
    params.push(...models);
  }

  if (series.length > 0) {
    query += ' AND products.collection IN (' + '?,'.repeat(series.length).slice(0, -1) + ')';
    params.push(...series);
  }

  console.log(`Price Ranges: ${prices}`);
  console.log(`Parsed Price Ranges: ${JSON.stringify(parsedPricesRanges(prices))}`);
  // console.log(`Prices Ranges = ${prices} \n Parsed Prices Ranges : ${JSON.stringify(parsedPricesRanges(prices))}`);
  if (prices.length > 0) {
    let priceConditions = parsedPricesRanges(prices).lowBounds.map((lowBound, index) => {
      let highBound = parsedPricesRanges(prices).highBounds[index];
      console.log(`Low Bound ${lowBound}, High Bound ${highBound}`)
      params.push(lowBound, highBound);
      return `(products.price BETWEEN ? AND ?)`;
    });
    query += ' AND (' + priceConditions.join(' OR ') + ')';
  }

  console.log(query);
  console.log(params);

  try {
    const filteredProducts = await database.all(query, params);

    // console.log(filteredProducts);
    return filteredProducts;
  } catch (err) {
    console.error('Error executing database query', err);
  }
}