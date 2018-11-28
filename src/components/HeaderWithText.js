// @flow
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import Text from '../components/Text';

import BACK_IMAGE from '../assets/back.png';
import { scale, verticalScale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: verticalScale(56.28),
    borderBottomWidth: 1,
    borderBottomColor: color.DARK_ORANGE,
  },
  touchableContainer: {
    position: 'absolute',
    width: scale(50),
    alignItems: 'center',
  },
  titleContainer: {
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 20,
    color: color.DARK_ORANGE,
  },
  image: {
    width: scale(23.14),
    height: verticalScale(18.77),
    resizeMode: 'contain',
  },
});

type HeaderWithTextProps = {
  ...ViewProps,
  onPress: Function,
  onRightButtonPress?: Function,
  rightButtonComponent?: React.Component,
  text: string,
};

const HeaderWithText = ({
  onPress,
  text,
  rightButtonComponent,
  onRightButtonPress,
}: HeaderWithTextProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
      <Image style={styles.image} source={BACK_IMAGE} />
    </TouchableOpacity>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText} variant="Bold">
        {text.toUpperCase()}
      </Text>
    </View>
    {rightButtonComponent && (
      <TouchableOpacity onPress={onRightButtonPress}>
        {rightButtonComponent}
      </TouchableOpacity>
    )}
  </View>
);

HeaderWithText.defaultProps = {
  onRightButtonPress: () => false,
};

export default HeaderWithText;
