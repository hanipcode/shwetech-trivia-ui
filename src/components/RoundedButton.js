import React from 'react';
import { verticalScale, scale } from 'react-native-size-matters';
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Image,
  ViewStyle,
} from 'react-native';

import GradientView from './GradientView';
import Text from './Text';
import color from '../themes/color';

import START_ICON from '../assets/start_icon.png';

const styles = StyleSheet.create({
  buttonContainer: {
    height: verticalScale(42),
    width: scale(270),
    borderRadius: verticalScale(21),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradientView: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: scale(18),
    marginTop: verticalScale(1),
  },
  countContainer: {
    width: scale(22),
    borderRadius: scale(11),
    height: scale(22),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginRight: scale(12.5),
  },
  countText: {
    color: color.WHITE,
  },
});

type RoundedButtonProps = TouchableOpacityProps & {
  /* is a background color */
  backgroundColor: string,
  /**
   * text color
   */
  color: string,
  /**
   * is this outline   ? if set to true it will remove the background color
   */
  outline: boolean,
  text: string,
  count: number,
  textStyle: number | object,
  /**
   * is this gradient   ? if set to true it will use gradient
   */
  gradient: boolean,
  withIcon: boolean,
  withCount: boolean,
};

/**
 * Rounded Button Component support almost all the style in the design
 * this component inherit all the props from TextInput
 */
const RoundedButton = (props: RoundedButtonProps) => (
  <TouchableOpacity
    {...props}
    style={{
      ...styles.buttonContainer,
      ...props.style,
      backgroundColor: props.outline ? color.WHITE : props.backgroundColor,
      borderWidth: props.outline ? 2 : 0,
      borderColor: props.backgroundColor,
    }}
  >
    {props.gradient && (
      <GradientView
        style={styles.gradientView}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
    )}
    <View style={styles.textContainer}>
      {props.withIcon && <Image source={START_ICON} style={styles.icon} />}
      {props.withCount && (
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{props.count}</Text>
        </View>
      )}
      <Text
        variant="SemiBold"
        style={{
          color: props.outline ? props.backgroundColor : color.WHITE,
          ...props.textStyle,
        }}
      >
        {props.text.toUpperCase()}
      </Text>
    </View>
  </TouchableOpacity>
);

RoundedButton.defaultProps = {
  backgroundColor: color.ORANGE,
  color: color.WHITE,
  outline: false,
  gradient: false,
  withIcon: false,
};

export default RoundedButton;
