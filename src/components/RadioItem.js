import React from 'react';
import { View } from 'react-native';
import color from '../themes/color';

const RadioItem = ({ color, isSelected }) => (
  <View
    style={{
      height: 20,
      width: 20,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        height: 11,
        width: 11,
        borderRadius: 6,
        backgroundColor: color,
        opacity: isSelected ? 1 : 0,
      }}
    />
  </View>
);

RadioItem.defaultProps = {
  color: color.ORANGE,
  isSelected: false,
};

export default RadioItem;
