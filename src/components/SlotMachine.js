import React from 'react';
import { Image, View, StyleSheet, ViewProps } from 'react-native';
import { BetTypesEnum } from './Types/BetTypes';

import BET_ASSET from '../assets/bet_asset';
const BET_LIST = Object.keys(BET_ASSET);

import SlotMachineRow from './SlotMachineRow';
import GradientView from './GradientView';
import { verticalScale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(10),
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  slotRow: {
    flexDirection: 'row',
    height: verticalScale(330),
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  topOrangeLine: {
    height: 3,
    position: 'absolute',
    top: verticalScale(135),
    backgroundColor: color.DARK_ORANGE_TRANSPARENT,
    zIndex: -1,
    width: '78%',
  },
  bottomOrangeLine: {
    height: 3,
    position: 'absolute',
    bottom: verticalScale(112),
    backgroundColor: color.DARK_ORANGE_TRANSPARENT,
    width: '78%',
    zIndex: -1,
  },
});

type SlotMachineProps = ViewProps & {
  winner: BetTypesEnum,
};

class SlotMachine extends React.Component<SlotMachineProps> {
  render() {
    const { winner } = this.props;
    return (
      <View
        style={{
          ...this.props.style,
          ...styles.container,
        }}
      >
        <View style={styles.slotRow}>
          <SlotMachineRow index={0} centerItem={winner} />
          <SlotMachineRow index={1} centerItem={winner} />
          <SlotMachineRow index={2} centerItem={winner} />
        </View>
        <View style={styles.topOrangeLine} />
        <View style={styles.bottomOrangeLine} />
        <GradientView
          style={styles.gradientTop}
          colors={['#FFFFFFDD', '#FFFFFF11']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <GradientView
          style={styles.gradientBottom}
          colors={['#FFFFFFDD', '#FFFFFF11']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        />
      </View>
    );
  }
}

export default SlotMachine;
