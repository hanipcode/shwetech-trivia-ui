import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import Text from './Text';
import ROOM_IMAGE from '../assets/room.png';
import HISTORY_IMAGE from '../assets/history.png';
import TOPUP_IMAGE from '../assets/topup.png';
import FRIENDS_IMAGE from '../assets/friends.png';
import WIN_LOSE from '../assets/win_lose.png';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import color from '../themes/color';

const styles = StyleSheet.create({
  container: {
    width: scale(120),
    height: verticalScale(85.9),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(2),
    borderColor: color.DARK_ORANGE,
    borderRadius: 21,
  },
  icon: {
    width: scale(25),
    height: scale(25),
    resizeMode: 'contain',
  },
  text: {
    color: color.ORANGE,
    marginTop: verticalScale(4),
  },
});

type MenuTypeEnums = 'room' | 'history' | 'topup' | 'friends' | 'win_lose';

type MenuItemProps = TouchableOpacityProps & {
  iconType: MenuTypeEnums,
  text: string,
};

const getAssetFromItemType = (iconType: MenuTypeEnums): string => {
  if (iconType === 'friends') return FRIENDS_IMAGE;
  if (iconType === 'history') return HISTORY_IMAGE;
  if (iconType === 'room') return ROOM_IMAGE;
  if (iconType === 'topup') return TOPUP_IMAGE;
  if (iconType === 'win_lose') return WIN_LOSE;
};

const getTextFromItemType = (iconType: MenuTypeEnums): string => {
  if (iconType === 'friends') return 'Friends';
  if (iconType === 'history') return 'History';
  if (iconType === 'room') return 'Room';
  if (iconType === 'topup') return 'Top Up';
  if (iconType === 'win_lose') return 'Win Lose';
};

const MenuItem = (props: MenuItemProps) => (
  <TouchableOpacity
    {...props}
    style={{
      ...styles.container,
      ...props.style,
    }}
  >
    <Image style={styles.icon} source={getAssetFromItemType(props.iconType)} />
    <Text style={styles.text} variant="SemiBold" style={styles.text}>
      {getTextFromItemType(props.iconType)}
    </Text>
  </TouchableOpacity>
);

MenuItem.defaultProps = {
  iconType: 'room',
};

export default MenuItem;
