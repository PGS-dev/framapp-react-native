import React from 'react';
import ReactNative from 'react-native';

const {
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative;

const Button = ({ onPress, text, textStyle, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, style]}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  style: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
  textStyle: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center'
  }
});