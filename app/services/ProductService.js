import { BASE_URL } from '../config';
import Product from '../models/Product';

const handleArrayResponse = (productsObject) => (
  Object.keys(productsObject).map((ProductId) =>
    new Product(ProductId, productsObject[ProductId]))
);

export const fetchProducts = (categoryId) => fetch(`${BASE_URL}/products.json?orderBy=%22category%22&limitToLast=1000&startAt=%22${categoryId}%22&endAt=%22${categoryId}%22`)
  .then((response) => response.json())
  .then(handleArrayResponse);

export const fetchPromotedProducts = () => fetch(`${BASE_URL}/products.json?orderBy=%22promoted%22&limitToLast=10`)
  .then((response) => response.json())
  .then(handleArrayResponse);

export const fetchProductById = (id) => fetch(`${BASE_URL}/products/${id}.json`)
  .then((response) => response.json())
  .then((productObject) => new Product(id, productObject));
