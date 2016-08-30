import { BASE_URL } from '../config';
import Category from '../models/Category';

export const fetchCategories = () => fetch(`${BASE_URL}/categories.json`)
    .then((response) => response.json())
    .then((categoriesObject) =>
      Object.keys(categoriesObject).map((categoryId) =>
        new Category(categoryId, categoriesObject[categoryId]))
    ).catch((error) => console.log(error));
