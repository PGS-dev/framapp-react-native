import React from 'react';
import { observer } from 'mobx-react/native';

import ProductsList from '../components/ProductsList';
import AppStore from '../stores/AppStore';
import Loader from '../components/Loader';
import ProductPage from './ProductPage';

import { fetchProducts } from '../services/ProductService';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.navigateToProduct = this.navigateToProduct.bind(this);
  }

  componentWillMount() {
    fetchProducts(this.props.category)
      .then((products) => this.setState({ products }));
  }

  navigateToProduct(product) {
    AppStore.router.push({
      component: ProductPage,
      title: product.name,
      props: {
        product
      }
    });
  }

  render() {
    if (this.state.products.length === 0) return <Loader />;

    return (
      <ProductsList onClickItem={this.navigateToProduct} products={this.state.products} />
    );
  }
}

export default observer(ProductsPage);
