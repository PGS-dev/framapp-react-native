import React from 'react';
import ReactNative from 'react-native';

import Product from '../components/Product';

const {
  View,
} = ReactNative;

class ProductPage extends React.Component {
  render() {
    console.log(this.props);
    return (
        <Product product={this.props.product} />
    );
  }
}

export default ProductPage;