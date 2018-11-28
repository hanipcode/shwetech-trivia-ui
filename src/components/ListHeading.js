import React from 'react';
import { View, TextProps, StyleSheet } from 'react-native';
import Text from './Text';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: color.DARK_ORANGE,
    paddingBottom: verticalScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redDot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(6),
    backgroundColor: color.DARK_ORANGE,
  },
  text: {
    fontSize: moderateScale(20),
    color: color.DARK_ORANGE,
  },
});

type ListHeadingProps = TextProps & {
  withRightDot: boolean,
  text: string,
};

const RedDot = () => <View style={styles.redDot} />;

const ListHeading = (props: ListHeadingProps) => (
  <View style={styles.container}>
    <Text variant="Bold" style={styles.text}>
      {props.text.toUpperCase()}
    </Text>
    {props.withRightDot && <RedDot />}
  </View>
);

export default ListHeading;
