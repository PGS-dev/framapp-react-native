import React from 'react';
import ReactNative from 'react-native';

import ProductsList from '../components/ProductsList';
import { fetchPromotedProducts } from '../services/ProductService';

const {
  StyleSheet
} = ReactNative;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    fetchPromotedProducts().then((products) => this.setState({ products }));
  }

  render() {
    return (
      <ProductsList products={this.state.products} />
    );
  }
}

export default HomePage;
