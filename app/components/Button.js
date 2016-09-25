import React from 'react';
import ReactNative from 'react-native';

const {
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative;

const Button = ({ onPress, text, backgroundColor, textStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { backgroundColor }]}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string,
  textStyle: React.PropTypes.number,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 20
  }
});