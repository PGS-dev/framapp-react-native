import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import ProductsList from '../components/ProductsList';
import AppStore from '../stores/AppStore';
import Loader from '../components/Loader';
import ProductPage from './ProductPage';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToProduct = this.navigateToProduct.bind(this);
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
    if (AppStore.products.length === 0) return <Loader />;

    return (
      <ProductsList onClickItem={this.navigateToProduct} products={AppStore.products} />
    );
  }
}

export default observer(ProductsPage);
