import { observable } from 'mobx';

import { getCategories } from '../actions/CategoryActions';

class AppStore {
  constructor() {
    this.categories = observable([]);
    this.products = observable([]);
    this.drawer = null;
    this.router = null;

    getCategories();
  }

}
export default new AppStore();
