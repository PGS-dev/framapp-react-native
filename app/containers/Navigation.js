import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import AppStore from '../stores/AppStore';
import { setProducts } from '../actions/ProductActions';
import { fetchProducts } from '../services/ProductService';
import ProductsPage from './ProductsPage'
;
const {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity
} = ReactNative;

class Navigation extends React.Component {
  navigateTo(category) {
    AppStore.drawer.close();
    AppStore.router.push({
      component: ProductsPage,
      title: category
    })
    fetchProducts(category)
      .then((products) => setProducts(products));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>FramApp</Text>
        </View>
        <View style={styles.navigation}>
          <Text style={styles.navigationHeader}>Categories:</Text>
          {AppStore.categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.navigationListItem}
              onPress={this.navigateTo.bind(this, category.id)}
            >
              <Text style={styles.navigationItemText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default observer(Navigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929'
  },
  header: {
    flex: 0.5,
    backgroundColor: 'rgb(0, 188, 212)',
    justifyContent: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  },
  navigationHeader: {
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  navigation: {
    flex: 1
  },
  navigationListItem: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  navigationItemText: {
    color: 'white'
  },
  listItem: {
    padding: 10
  },
  itemText: {
    color: 'white'
  }
});
