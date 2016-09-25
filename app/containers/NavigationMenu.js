import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import AppStore from '../stores/AppStore';
import ProductsPage from './ProductsPage';
import AdminCategoriesPage from './AdminCategoriesPage';

const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} = ReactNative;

const navigateAdmin = (title, component) => {
  AppStore.drawer.close();
  AppStore.router.replace({
    component,
    title
  });
};

const renderAdminPanel = (onPressAdminItem) => {
  if (!AppStore.user.isLoggedIn.get()) return null;

  return (
    <View style={styles.navigation}>
      <Text style={styles.navigationHeader}>Admin Panel:</Text>
      <TouchableOpacity
        style={styles.navigationListItem}
        onPress={() => navigateAdmin('Categories', AdminCategoriesPage)}
      >
        <Text style={styles.navigationItemText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationListItem}
        onPress={() => {}}
      >
        <Text style={styles.navigationItemText}>Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const navigateTo = (category) => {
  AppStore.drawer.close();
  AppStore.products.replace([]);
  AppStore.router.replace({
    component: ProductsPage,
    title: category,
    props: {
      category
    }
  });
};

const NavigationMenu = ({ onPressItem, onPressAdminItem }) => (
  <View style={styles.navigation}>
    <Text style={styles.navigationHeader}>Categories:</Text>
    {AppStore.categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        style={styles.navigationListItem}
        onPress={() => navigateTo(category.id)}
      >
        <Text style={styles.navigationItemText}>{category.name}</Text>
      </TouchableOpacity>
    ))}
    {renderAdminPanel(onPressAdminItem)}
  </View>
);
export default observer(NavigationMenu);

const styles = StyleSheet.create({
  navigation: {
    flex: 0.35
  },
  navigationListItem: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  navigationItemText: {
    color: 'white'
  },
  navigationHeader: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
});