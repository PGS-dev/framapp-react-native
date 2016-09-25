import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import AppStore from '../stores/AppStore';
import Button from '../components/Button';

const {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} = ReactNative;

const NavigationHeader = ({ onToggleAuth }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>FramApp</Text>
    <View style={styles.buttonContainer}>
      <Button
        textStyle={styles.buttonText}
        onPress={onToggleAuth}
        text={AppStore.user.isLoggedIn.get() ? 'Sign Out' : 'Sign In'}
      />
    </View>
  </View>
);

NavigationHeader.propTypes = {
  onToggleAuth: React.PropTypes.func.isRequired,
};

export default observer(NavigationHeader);

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  header: {
    flex: 0.3,
    backgroundColor: 'rgb(0, 188, 212)',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    flex: 0.8,
    lineHeight: 120
  },
  buttonContainer: {
    flex: 0.2,
    alignSelf: 'flex-end',
    marginRight: 20
  },
  buttonText: {
    textAlign: 'right',
    color: 'white'
  }
});