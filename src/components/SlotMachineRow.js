import React from 'react';
import _ from 'lodash';
import {
  Animated,
  Image,
  View,
  ViewProps,
  StyleSheet,
  Dimensions,
} from 'react-native';

import BET_ASSET from '../assets/bet_asset';

import { BetTypesEnum } from './Types/BetTypes';
import { verticalScale, scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const BET_LIST = Object.keys(BET_ASSET);
const MIDDLE_INDEX = 6;

function generateSwappedList(bet: BetTypesEnum) {
  const RESULT_LIST = _.clone(BET_LIST);
  const shuffledList = _.shuffle(RESULT_LIST);

  const betIndex = _.findIndex(RESULT_LIST, betName => betName === bet);
  const mappedResult = shuffledList.map((betItem, index) => {
    if (index === MIDDLE_INDEX) {
      return BET_LIST[betIndex];
    } else if (index === betIndex) {
      return BET_LIST[MIDDLE_INDEX];
    }
    return betItem;
  });
  console.log(shuffledList, mappedResult);
  return mappedResult;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  image: {
    backgroundColor: 'transparent',
    width: width / 4,
    height: width / 4,
    resizeMode: 'contain',
    marginVertical: verticalScale(8),
    marginHorizontal: scale(4),
  },
});

type SlotMachineRowProps = ViewProps & {
  centerItem: BetTypesEnum,
  index: number,
};

class SlotMachineRow extends React.Component<SlotMachineRowProps> {
  state = {
    velocity: 0,
    position: new Animated.Value(0),
    animating: false,
  };
  componentDidMount() {
    this.spin();
  }
  spin(delay: number = 0) {
    const { index } = this.props;
    this.setState({ animating: true }, () => {
      Animated.sequence([
        Animated.timing(this.state.position, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          delay: index * 1000,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.state.position, {
              toValue: verticalScale(-900),
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(this.state.position, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]),
          { iterations: 14 }
        ),
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.state.position, {
              toValue: verticalScale(-940),
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(this.state.position, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
          { iterations: 4 }
        ),
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.state.position, {
              toValue: verticalScale(-800),
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(this.state.position, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
          ]),
          { iterations: 2 }
        ),
        Animated.timing(this.state.position, {
          toValue: verticalScale(-590),
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        this.setState({ animating: false });
      });
    });
  }
  render() {
    const { centerItem } = this.props;
    const { position, animating } = this.state;
    return (
      <Animated.View style={styles.container}>
        {generateSwappedList(centerItem).map((betName, index) => (
          <Animated.Image
            blurRadius={animating ? 0.5 : 0}
            style={{
              ...styles.image,
              transform: [{ translateY: position }],
            }}
            source={BET_ASSET[betName]}
          />
        ))}
      </Animated.View>
    );
  }
}

SlotMachineRow.defaultProps = {
  centerItem: 'ox',
};

export default SlotMachineRow;
