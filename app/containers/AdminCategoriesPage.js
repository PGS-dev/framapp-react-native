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
    <Button onPress={() => {}} text={"Create new category"}/>
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
            style={styles.hiddenButton}
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
    flex: 1,
    justifyContent: 'center',
  },
  hiddenButtonText: {
    textAlign: 'center',
    color: 'white'
  },
  rowFront: {
    flex: 1,
    height: 50,
    backgroundColor: '#f4f3f1',
    borderBottomWidth: 4,
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
  }
});