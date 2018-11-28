import React from 'react';
import { verticalScale } from 'react-native-size-matters';
import { Text, TextProps } from 'react-native';
import color from '../themes/color';

type CustomTextProps = TextProps & {
  variant: 'Light' | 'Medium' | 'Regular' | 'Bold' | 'Black' | 'SemiBold',
};

const CustomText = (props: CustomTextProps) => (
  <Text
    {...props}
    style={{
      fontFamily: `Montserrat-${props.variant}`,
      fontSize: verticalScale(14),
      color: color.GREY,
      ...props.style,
    }}
  >
    {props.children}
  </Text>
);

CustomText.defaultProps = {
  variant: 'Medium',
};

export default CustomText;
