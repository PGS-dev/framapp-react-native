import React from 'react';
import ReactNative from 'react-native';

import Modal from '../components/Modal';

const {
  StyleSheet,
  View,
  Text
} = ReactNative;

class LoginModal extends React.Component {

  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Modal visible={this.props.visible}>
        <View><Text>Login form</Text></View>
      </Modal>
    );
  }
}

export default LoginModal;
