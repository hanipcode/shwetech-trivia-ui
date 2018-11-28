import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import moment from 'moment';

import { BetTypesEnum } from './Types/BetTypes';

import Text from './Text';
import color from '../themes/color';
import { verticalScale, moderateScale } from 'react-native-size-matters';

type HistoryGameTypeEnum = 'takeCredit' | 'win' | 'placeBet' | 'lose';

type HistoryGameItemProps = ViewProps & {
  phone: number,
  date: Date,
  type: HistoryGameTypeEnum,
  credit?: number,
  roomName?: string,
  bet?: BetTypesEnum,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.GREY_TRANSPARENT,
    marginBottom: verticalScale(4),
  },
  phoneCol: {
    flexGrow: 1,
    alignItems: 'flex-start',
    width: '35%',
  },
  contentCol: {
    flexGrow: 1,
    alignItems: 'center',
    width: '35%',
  },
  roomCol: {
    flexGrow: 1,
    width: '30%',
    alignItems: 'flex-start',
  },
  topText: {
    marginBottom: verticalScale(4),
  },
  dateText: {
    fontSize: moderateScale(9),
    marginTop: verticalScale(4),
    marginBottom: verticalScale(10),
  },
});

function getTextByType(type: HistoryGameTypeEnum): string {
  if (type === 'takeCredit') return 'Take Credit';
  if (type === 'lose') return 'Lose';
  if (type === 'placeBet') return 'Place Bet';
  if (type === 'win') return 'Win';
}

function getColorByType(type: HistoryGameTypeEnum): string {
  if (type === 'lose') return color.DARK_ORANGE;
  if (type === 'placeBet') return color.ORANGE;
  return color.GREEN;
}

class HistoryGameItem extends React.Component<HistoryGameItemProps> {
  renderTextByType(
    type: HistoryGameTypeEnum,
    bet: BetTypesEnum,
    creditTaken: number
  ) {
    if (type === 'placeBet') {
      return (
        <Text
          variant="Bold"
          style={{ color: getColorByType(type), ...styles.contentText }}
        >
          {bet.toUpperCase()}
        </Text>
      );
    } else {
      return (
        <Text
          variant="Bold"
          style={{ color: getColorByType(type), ...styles.contentText }}
        >
          {creditTaken}
        </Text>
      );
    }
  }
  render() {
    const { phone, date, type, credit, roomName, bet } = this.props;
    return (
      <View
        {...this.props}
        style={{
          ...styles.container,
          ...this.props.style,
        }}
      >
        <View style={styles.phoneCol}>
          <Text style={styles.topText} numberOfLines={1}>
            {phone}
          </Text>
          <Text numberOfLines={1} style={styles.dateText}>
            {moment(date).format('DD-MM-YYYY  hh:mm')}
          </Text>
        </View>
        <View style={styles.contentCol}>
          <Text style={styles.topText} numberOfLines={1}>
            {getTextByType(type)}
          </Text>
          {this.renderTextByType(type, bet, credit)}
        </View>
        <View style={styles.roomCol}>
          <Text numberOfLines={1} style={styles.topText}>
            Room Name
          </Text>
          <Text numberOfLines={1} variant="Bold">
            {roomName}
          </Text>
        </View>
      </View>
    );
  }
}

export default HistoryGameItem;
