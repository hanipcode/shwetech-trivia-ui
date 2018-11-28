// @flow
import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

import BACK_IMAGE from '../assets/back.png';
import BACK_IMAGE_WHITE from '../assets/back_white.png';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(38),
    paddingLeft: scale(25),
  },
  image: {
    width: scale(23.14),
    height: verticalScale(18.77),
    resizeMode: 'contain',
  },
});

type HeaderBackProps = {
  onPress: Function,
  onRightButtonPress?: Function,
  rightButtonComponent?: React.Component,
  inverse: boolean,
};

const HeaderBack = ({
  onPress,
  inverse,
  onRightButtonPress,
  rightButtonComponent,
}: HeaderBackProps) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={inverse ? BACK_IMAGE_WHITE : BACK_IMAGE}
        style={styles.image}
      />
    </TouchableOpacity>

    {rightButtonComponent && (
      <TouchableOpacity onPress={onRightButtonPress}>
        {rightButtonComponent}
      </TouchableOpacity>
    )}
  </View>
);

HeaderBack.defaultProps = {
  onRightButtonPress: () => false,
};

export default HeaderBack;
