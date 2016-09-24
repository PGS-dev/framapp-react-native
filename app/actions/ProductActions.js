import { action } from 'mobx';

import AppStore from '../stores/AppStore';

export const setProducts = action((products) => {
  AppStore.products.replace(products);
});

export const getProductFromStore = action((productID) => AppStore.products.filter((product) => product.id === productID)[0] || null);
