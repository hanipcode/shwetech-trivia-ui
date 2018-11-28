import React from 'react';
import { TextProps, StyleSheet } from 'react-native';
import { formatNumber } from 'libphonenumber-js';

import Text from './Text';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(26),
  },
});

type PhoneNumberTextProps = TextProps & {
  phoneNumber: number | string,
  variant: 'Light' | 'Medium' | 'Regular' | 'Bold' | 'Black' | 'SemiBold',
};

const PhoneNumberText = (props: PhoneNumberTextProps) => (
  <Text
    variant={props.variant}
    {...props}
    style={{
      ...styles.text,
      ...props.style,
    }}
  >
    {formatNumber(`+${props.phoneNumber.toString()}`, 'International').replace(
      '+',
      ''
    )}
  </Text>
);

PhoneNumberText.defaultProps = {
  variant: 'SemiBold',
};

export default PhoneNumberText;
