import React from 'react';
import { View, Image, ViewProps, StyleSheet } from 'react-native';

import TOP_ORNAMENT from '../assets/top_ornament.png';
import TOP_ORNAMENT_MEDIUM from '../assets/top_ornament_medium.png';
import TOP_ORNAMENT_SMALL from '../assets/top_ornament_small.png';

import { verticalScale } from 'react-native-size-matters';

type HeaderOrnamentViewTypeEnum = 'large' | 'medium' | 'small';
type HeaderOrnamentViewProps = ViewProps & {
  type: HeaderOrnamentViewTypeEnum,
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    resizeMode: 'stretch',
  },
});

function getOrnamentByType(type: HeaderOrnamentViewTypeEnum) {
  if (type === 'large') return TOP_ORNAMENT;
  if (type === 'medium') return TOP_ORNAMENT_MEDIUM;
  return TOP_ORNAMENT_SMALL;
}

function getHeightByType(type: HeaderOrnamentViewTypeEnum) {
  if (type === 'large') return verticalScale(229.53);
  if (type === 'medium') return verticalScale(162.99);
  return verticalScale(115.56);
}

const HeaderOrnamentView = (props: HeaderOrnamentViewProps) => (
  <View {...props}>
    <Image
      source={getOrnamentByType(props.type)}
      style={{
        ...styles.backgroundImage,
        minHeight: getHeightByType(props.type),
      }}
    />
    {props.children}
  </View>
);

HeaderOrnamentView.defaultProps = {
  type: 'large',
};

export default HeaderOrnamentView;
