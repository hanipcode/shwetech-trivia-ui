import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import color from '../themes/color';

const GradientView = (props: LinearGradientProps) => (
  <LinearGradient
    colors={[color.DARK_ORANGE, color.ORANGE]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    {...props}
  >
    {props.children}
  </LinearGradient>
);

export default GradientView;
