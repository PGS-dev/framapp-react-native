import AppStore from '../stores/AppStore';
import { fetchCategories } from '../services/CategoryService';

export const setCategories = (categories) => {
  AppStore.categories.replace(categories);
};

export const getCategories = () => {
  fetchCategories().then((categories) => setCategories(categories));
};
