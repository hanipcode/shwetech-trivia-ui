import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LOGO_TEXT from '../assets/logo_text.png';
import { verticalScale, scale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: verticalScale(56.28),
    borderBottomWidth: 1,
    borderBottomColor: color.DARK_ORANGE,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  image: {
    width: scale(68.23),
    height: verticalScale(23.59),
    resizeMode: 'contain',
  },
});

const HeaderMain = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Image source={LOGO_TEXT} style={styles.image} />
    </View>
  </View>
);

export default HeaderMain;
