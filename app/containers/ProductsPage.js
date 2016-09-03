import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import ProductsList from '../components/ProductsList';
import AppStore from '../stores/AppStore';
import Loader from '../components/Loader';

class ProductsPage extends React.Component {
  render() {
    if (AppStore.products.length === 0) return <Loader />;

    return (
      <ProductsList products={AppStore.products} />
    );
  }
}

export default observer(ProductsPage);
