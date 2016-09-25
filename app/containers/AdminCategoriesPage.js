import React from 'react';
import { observer } from 'mobx-react/native'
import ReactNative from 'react-native';

import SwipeList from '../components/SwipeList';
import AppStore from '../stores/AppStore';
import Button from '../components/Button';

const {
  View,
  Text,
  StyleSheet,
} = ReactNative;

const AdminCategoriesPage = () => (
  <View style={styles.container}>
    <Button
      onPress={() => {}}
      text={"Create new category"}
      style={styles.hiddenButton}
      textStyle={styles.hiddenButtonText}
    />
    <SwipeList
      data={AppStore.categories.slice()}
      rowComponent={({data}) => (
        <View style={styles.rowFront}>
          <Text style={styles.rowText}>{data.name}</Text>
        </View>
      )}
      rightHiddenComponent={({data}) => (
        <View style={styles.rowBack}>
          <Button
            text="Edit"
            textStyle={styles.hiddenButtonText}
            onPress={() => {}}
          />
        </View>
      )}
    />
  </View>

);

export default observer(AdminCategoriesPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hiddenButton: {
    backgroundColor: 'rgb(0, 188, 212)',
    margin: 10,
    borderRadius: 10,
  },
  hiddenButtonText: {
    color: 'white'
  },
  rowFront: {
    flex: 1,
    height: 51,
    backgroundColor: '#f4f3f1',
    borderBottomWidth: 1,
    borderColor: '#e8e7e3'
  },
  rowBack: {
    width: 75,
    height: 50,
    backgroundColor: '#ff1a1a',
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  rowText: {
    lineHeight: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});