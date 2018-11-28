import React from 'react';
import { View, StyleSheet, ViewProps, TouchableOpacity } from 'react-native';

import Text from './Text';
import GradientView from './GradientView';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(41),
    borderRadius: verticalScale(21),
    borderWidth: 1,
    borderColor: color.ORANGE,
    overflow: 'hidden',
  },
  touchableItemSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  touchableItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableItemText: {
    color: '#FFF',
    fontSize: moderateScale(18),
  },
  touchableItemTextSelected: {
    color: color.ORANGE,
    fontSize: moderateScale(18),
  },
});

type SegmentedControlProps = ViewProps & {
  textList: string[],
  onButtonPress: (index: number) => void,
};

type SegmentedControlState = {
  selected: number,
};

class SegmentedControl extends React.Component<
  SegmentedControlProps,
  SegmentedControlState
> {
  state: SegmentedControlState = {
    selected: 0,
  };

  onButtonPress(index: number): void {
    const { onButtonPress } = this.props;
    this.setState({ selected: index });
    onButtonPress(index);
  }

  render() {
    const { selected } = this.state;
    const { textList } = this.props;
    return (
      <GradientView
        {...this.props}
        style={{
          ...styles.container,
          ...this.props.style,
        }}
      >
        {textList.map((text, index) => (
          <TouchableOpacity
            onPress={() => this.onButtonPress(index)}
            style={
              selected === index
                ? styles.touchableItemSelected
                : styles.touchableItem
            }
          >
            <Text
              variant="Bold"
              style={
                selected === index
                  ? styles.touchableItemTextSelected
                  : styles.touchableItemText
              }
            >
              {text}
            </Text>
          </TouchableOpacity>
        ))}
      </GradientView>
    );
  }
}

SegmentedControl.defaultProps = {
  onButtonPress: () => false,
};

export default SegmentedControl;
