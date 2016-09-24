import { observable } from 'mobx';

import User from '../models/User';
import { getCategories } from '../actions/CategoryActions';

class AppStore {
  constructor() {
    this.categories = observable([]);
    this.products = observable([]);
    this.drawer = null;
    this.router = null;
    this.user = new User();

    getCategories();
  }

}
export default new AppStore();
