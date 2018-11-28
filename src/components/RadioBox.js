import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewProps } from 'react-native';

import Text from './Text';
import RadioItem from './RadioItem';
import COLOR from '../themes/color';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLOR.ORANGE,
    marginLeft: scale(22),
  },
});

type RadioBoxProps = ViewProps & {
  itemList: string[],
  onIndexChanged: (index: number) => void,
  color: string,
};

type RadioBoxState = {
  selectedIndex: number,
};

class RadioBox extends React.Component<RadioBoxProps, RadioBoxState> {
  state: RadioBoxState = {
    selectedIndex: 0,
  };

  onIndexChanged(index: number): void {
    const { onIndexChanged } = this.props;
    this.setState({ selectedIndex: index });
    onIndexChanged(index);
  }

  render() {
    const { itemList, color } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View
        style={{
          ...styles.container,
          ...this.props.style,
          backgroundColor: color,
        }}
      >
        {itemList.map((text, index) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => this.onIndexChanged(index)}
          >
            <RadioItem isSelected={index === selectedIndex} />
            <Text
              style={{
                ...styles.text,
                color: color,
              }}
            >
              {text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

RadioBox.defaultProps = {
  onIndexChanged: () => false,
  color: COLOR.ORANGE,
};

export default RadioBox;
