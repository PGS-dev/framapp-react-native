import { observable } from 'mobx';

import { fetchProducts } from '../services/ProductService';

export default class Category {
  name: String;
  id: Number;

  constructor(id, { title: name }) {
    this.id = id;
    this.name = name;
    this.products = observable([]);
  }

  updateProducts() {
    fetchProducts(this.name).then((products) => this.products.replace(products));
  }
}
