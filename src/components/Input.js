import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import color from '../themes/color';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  input: {
    paddingLeft: scale(30),
    color: color.GREY,
  },
});

/**
 * Input Component
 * this component inherit all the props from TextInput
 */
const Input = (props: TextInputProps) => (
  <TextInput
    underlineColorAndroid={color.GREY}
    placeholderTextColor={color.GREY_TRANSPARENT}
    {...props}
    style={{
      ...styles.input,
      ...props.style,
    }}
  />
);

export default Input;
