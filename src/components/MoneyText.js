import React from 'react';
import { View, Image, TextProps, StyleSheet } from 'react-native';
import accounting from 'accounting';

import Text from './Text';

import COIN_IMAGE from '../assets/coin.png';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(30),
    resizeMode: 'contain',
    marginRight: scale(8),
  },
  text: {
    fontSize: moderateScale(26),
  },
});

type MoneyTextProps = TextProps & {
  ammount: number,
  withIcon: boolean,
  variant: 'Light' | 'Medium' | 'Regular' | 'Bold' | 'Black' | 'SemiBold',
};

const MoneyText = (props: MoneyTextProps) => (
  <View style={styles.container}>
    {props.withIcon && <Image source={COIN_IMAGE} style={styles.image} />}
    <Text
      variant={props.variant}
      {...props}
      style={{
        ...styles.text,
        ...props.style,
      }}
    >
      {accounting.formatMoney(props.ammount, '', 0)}
    </Text>
  </View>
);

MoneyText.defaultProps = {
  ammount: 0,
  withIcon: true,
  variant: 'SemiBold',
};

export default MoneyText;
