import React from 'react';
import ReactNative from 'react-native';

import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';
import { fetchPromotedProducts } from '../services/ProductService';

const {
  ActivityIndicator
} = ReactNative;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentWillMount() {
    fetchPromotedProducts().then((products) => this.setState({ products, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) return <Loader />;

    return (
      <ProductsList products={this.state.products} />
    );
  }
}

export default HomePage;
