// @flow
import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
// $FlowFixMe
import { FlatListProps, StyleSheet, FlatList, Dimensions } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';

import MORE_MENU_IMAGE from '../assets/more_menu.png';

import Text from './Text';
import RoundedButton from './RoundedButton';
import color from '../themes/color';

const { width } = Dimensions.get('window');

type RoomData = {
  id: number,
  roomName: string,
  date: Date,
  credit: ?number,
};

type FlatListItem = {
  item: RoomData,
  index: number,
};

type PlayerRoomTableProps = FlatListProps & {
  data: Array<RoomData>,
  onJoinPress: (roomId: number) => void,
};

export default class PlayerRoomTable extends React.Component<PlayerRoomTableProps> {
  onJoinPress(roomId: number) {
    const { onJoinPress } = this.props;
    onJoinPress(roomId);
  }

  renderRow({ item }: FlatListItem) {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.id}</Text>
        <View style={styles.itemCenter}>
          <Text variant="Bold">{item.roomName}</Text>
          <Text style={styles.dateText}>{moment(item.date).fromNow()}</Text>
        </View>
        <RoundedButton
          gradient
          text="Join"
          onPress={() => this.onJoinPress(item.id)}
          style={styles.joinButton}
        />
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text variant="Bold" style={styles.headerText}>
          Id
        </Text>
        <View style={styles.headerItemCenter}>
          <Text variant="Bold" style={styles.headerText}>
            Room Name
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Text variant="Bold" style={styles.headerText}>
            Credit
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { data, style } = this.props;
    return (
      <View>
        {/* $FlowFixMe  */}
        <KeyboardAwareFlatList
          data={data}
          renderItem={(item: FlatListItem) => this.renderRow(item)}
          ListHeaderComponent={() => this.renderHeader()}
          keyExtractor={item => `${item.id}`}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalScale(35),
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: color.DARK_ORANGE_TRANSPARENT,
  },
  headerContainerCenter: {
    flexDirection: 'row',
    height: verticalScale(35),
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: color.DARK_ORANGE_TRANSPARENT,
  },
  headerItemCenter: {
    width: width / 2.25,
    alignItems: 'flex-start',
    paddingLeft: scale(22),
  },
  headerText: {
    color: color.DARK_ORANGE,
  },
  headerRight: {
    width: scale(82),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalScale(73),
    paddingTop: verticalScale(18),
    borderBottomWidth: 1,
    borderBottomColor: color.GREY_TRANSPARENT,
  },
  itemContainerCenter: {
    flexDirection: 'row',
    height: verticalScale(35),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.GREY_TRANSPARENT,
  },
  itemCenter: {
    width: width / 2.25,
    alignItems: 'flex-start',
    paddingLeft: scale(20),
  },
  joinButton: {
    width: scale(82),
    height: scale(29),
    marginRight: scale(8),
  },
  dateText: {
    fontSize: moderateScale(12),
  },
});
