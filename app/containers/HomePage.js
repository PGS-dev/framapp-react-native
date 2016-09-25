import React from 'react';

import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';
import { fetchPromotedProducts } from '../services/ProductService';
import ProductPage from './ProductPage';
import AppStore from '../stores/AppStore';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };

    this.navigateToProduct = this.navigateToProduct.bind(this);
  }

  componentWillMount() {
    fetchPromotedProducts().then((products) => this.setState({ products, isLoading: false }));
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
    if (this.state.isLoading) return <Loader />;

    return (
      <ProductsList onClickItem={this.navigateToProduct} products={this.state.products} />
    );
  }
}

export default HomePage;
