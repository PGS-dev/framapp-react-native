import { action } from 'mobx';

import AppStore from '../stores/AppStore';

export const setProducts = action((products) => {
  AppStore.products.replace(products);
});
