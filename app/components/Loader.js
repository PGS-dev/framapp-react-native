import React from 'react';
import ReactNative from 'react-native';

const { ActivityIndicator, StyleSheet } = ReactNative;

export default () => <ActivityIndicator size="large" style={styles.loader}/>;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center'
  }
})
