import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';

import AppStore from '../stores/AppStore';
import { signOut } from '../actions/UserActions';
import LoginModal from './LoginModal';
import NavigationHeader from './NavigationHeader';
import NavigationMenu from './NavigationMenu';

const {
  StyleSheet,
  View,
} = ReactNative;

class Navigation extends React.Component {

  constructor() {
    super();
    this.state = {
      isModalVisible: false
    };

    this.handleAuthButton = this.handleAuthButton.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleAuthButton() {
    if (AppStore.user.isLoggedIn.get()) {
      signOut();
    } else {
      this.toggleModal();
    }
  }

  toggleModal() {
    AppStore.isModalOpened.set(!AppStore.isModalOpened.get());
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader onToggleAuth={this.handleAuthButton} />
        <NavigationMenu />
        <LoginModal
          onClose={this.toggleModal}
          visible={this.state.isModalVisible}
        />
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


  listItem: {
    padding: 10
  },
  itemText: {
    color: 'white'
  }
});
