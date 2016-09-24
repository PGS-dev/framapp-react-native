import AppStore from '../stores/AppStore';
import { postCategory, fetchCategories } from '../services/CategoryService';

export const setCategories = (categories) => {
  AppStore.categories.replace(categories);
};

export const getCategories = () => fetchCategories().then((categories) => setCategories(categories));

export const getCategoryById = (id) => []
  .concat(
    AppStore.categories.filter((category) => category.id === id)
  )[0] || null;

export const addCategory = (category) => AppStore.categories.push(category);
