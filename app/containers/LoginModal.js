import React from 'react';
import ReactNative from 'react-native';

import Modal from '../components/Modal';
import Button from '../components/Button';
import { signIn } from '../actions/UserActions';
import AppStore from '../stores/AppStore';

const {
  View,
  TextInput,
  StyleSheet,
} = ReactNative;

class LoginModal extends React.Component {

  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.login = this.login.bind(this);
  }

  login() {
    signIn(this.state.username, this.state.password);
    this.props.onClose();
  }

  render() {
    return (
      <Modal
          headerText="Login Form"
          onClickCancel={this.props.onClose}
          visible={this.props.visible}>
        <View refreshing={false}>
          <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="email-address"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
          />
          <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
          />
          <Button text="Sign in" onPress={this.login} />
        </View>
      </Modal>
    );
  }
}

export default LoginModal;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    marginBottom: 5,
    padding: 5
  }
});