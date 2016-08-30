import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import ProductsList from '../components/ProductsList';
import AppStore from '../stores/AppStore';

class ProductsPage extends React.Component {
  render() {
    return (
      <ProductsList products={AppStore.products} />
    );
  }
}

export default observer(ProductsPage);
