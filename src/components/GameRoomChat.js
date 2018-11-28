import React from 'react';
import { FlatListProps, View, StyleSheet } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

import Text from './Text';
import { scale, verticalScale } from 'react-native-size-matters';

type GameRoomChatItem = {
  headerText: string,
  text?: string,
  headline: boolean,
};

type GameRoomProps = FlatListProps & {
  chatData: Array<GameRoomChatItem>,
  isEnded: boolean,
};

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  leftRow: {
    color: '#FFF',
  },
  headlineText: {
    color: '#FFF',
    fontSize: verticalScale(24),
  },
  rightRow: {
    marginLeft: scale(16),
    color: '#FFF',
  },
});

function reverseRowObject(chatData) {
  return chatData.map((item, index) => chatData[chatData.length - 1 - index]);
}

export default class GameRoomChat extends React.Component<GameRoomProps> {
  renderNormalRow(item: GameRoomChatItem) {
    return (
      <View style={styles.rowContainer}>
        <Text variant="Bold" style={styles.leftRow}>
          {item.headerText}
        </Text>
        <Text style={styles.rightRow}>{item.text || ''}</Text>
      </View>
    );
  }

  renderHeadlineRow(item: GameRoomChatItem) {
    return (
      <View style={styles.rowContainer}>
        <Text variant="Bold" style={styles.headlineText}>
          {item.headerText}
        </Text>
      </View>
    );
  }

  renderRow({ item }: { item: GameRoomChatItem }) {
    if (item.headline) {
      return this.renderHeadlineRow(item);
    }
    return this.renderNormalRow(item);
  }

  render() {
    const { chatData, isEnded, style } = this.props;
    const reversedChatData = reverseRowObject(chatData);
    return (
      <KeyboardAwareFlatList
        {...this.props}
        data={reversedChatData}
        renderItem={item => this.renderRow(item)}
      />
    );
  }
}
