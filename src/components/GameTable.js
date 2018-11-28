import React from 'react';
import {
  Image,
  ViewProps,
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';

import BET_ASSET from '../assets/bet_asset';
import { scale, verticalScale } from 'react-native-size-matters';
import color from '../themes/color';

import { BetTypesEnum } from './Types/BetTypes';

const FIRST_ROW = ['dog', 'rooster', 'monkey', 'horse'];
const SECOND_ROW = ['tiger', 'snake', 'dragon', 'rabbit'];
const THIRD_ROW = ['ox', 'goat', 'rat', 'pig'];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowItem: {
    width: scale(77),
    height: verticalScale(77),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondRow: {
    borderColor: color.ORANGE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    zIndex: -1,
  },
  seconRowItem: {
    borderColor: color.ORANGE,
    borderRightWidth: 1,
    zIndex: -1,
    borderLeftWidth: 1,
  },
  thirdRowItem: {
    borderColor: color.ORANGE,
    borderRightWidth: 1,
  },
});

type GameTableProps = {
  onBetSelected: (betName: BetTypesEnum) => void,
};

type GameTableState = {
  selectedBet: BetTypesEnum,
};

class GameTable extends React.Component<GameTableProps, GameTableState> {
  state = {
    selectedBet: '',
  };

  onItemClick(betName: BetTypesEnum) {
    const { selectedBet } = this.state;
    const { onBetSelected } = this.props;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    onBetSelected(betName);
    if (betName === selectedBet) {
      this.setState({ selectedBet: '' });
      return;
    }
    this.setState({ selectedBet: betName });
  }

  render() {
    const { selectedBet } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {FIRST_ROW.map((betName, index) => (
            <TouchableOpacity
              onPress={() => this.onItemClick(betName)}
              style={[
                styles.rowItem,
                index === 1 && styles.seconRowItem,
                index === 2 && styles.thirdRowItem,
              ]}
            >
              <Image
                source={BET_ASSET[betName]}
                style={{
                  opacity: selectedBet && selectedBet !== betName ? 0.15 : 1,
                  resizeMode: 'contain',
                  zIndex: 9999,
                  transform: [
                    {
                      scale: selectedBet === betName ? 2.45 : 1,
                    },
                  ],
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.row, styles.secondRow]}>
          {SECOND_ROW.map((betName, index) => (
            <TouchableOpacity
              onPress={() => this.onItemClick(betName)}
              style={[
                styles.rowItem,
                index === 1 && styles.seconRowItem,
                index === 2 && styles.thirdRowItem,
              ]}
            >
              <Image
                source={BET_ASSET[betName]}
                style={{
                  opacity: selectedBet && selectedBet !== betName ? 0.15 : 1,
                  resizeMode: 'contain',
                  zIndex: 9999,
                  transform: [
                    {
                      scale: selectedBet === betName ? 2.45 : 1,
                    },
                  ],
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {THIRD_ROW.map((betName, index) => (
            <TouchableOpacity
              onPress={() => this.onItemClick(betName)}
              style={[
                styles.rowItem,
                index === 1 && styles.seconRowItem,
                index === 2 && styles.thirdRowItem,
              ]}
            >
              <Image
                source={BET_ASSET[betName]}
                style={{
                  opacity: selectedBet && selectedBet !== betName ? 0.15 : 1,
                  resizeMode: 'contain',
                  zIndex: 9999,
                  transform: [
                    {
                      scale: selectedBet === betName ? 2.45 : 1,
                    },
                  ],
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

GameTable.defaultProps = {
  onBetSelected: () => false,
};

export default GameTable;
