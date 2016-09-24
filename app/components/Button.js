import React from 'react';
import ReactNative from 'react-native';

const {
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative;

const Button = ({ onPress, text, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { backgroundColor }]}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string,
};

export default Button;

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 20
  }
});