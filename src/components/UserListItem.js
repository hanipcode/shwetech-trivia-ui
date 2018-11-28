import React from 'react';
import moment from 'moment';
import {
  View,
  ViewProps,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import Text from './Text';
import PhoneNumberText from './PhoneNumberText';
import RoundedButton from './RoundedButton';

import MORE_MENU_IMAGE from '../assets/more_menu.png';
import CLOSE_IMAGE from '../assets/close.png';
import { verticalScale, moderateScale, scale } from 'react-native-size-matters';
import MoneyText from './MoneyText';
import color from '../themes/color';

type UserListItemProps = ViewProps & {
  phoneNumber: number | string,
  ammount: number,
  dateTime: Date,
  withMiddleInfo: boolean,
  rightIconType: 'menu' | 'close' | 'button',
  onRightIconPress: Function,
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(66),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.GREY,
  },
  phoneText: {
    fontSize: moderateScale(14),
    width: scale(100),
    marginBottom: verticalScale(4),
  },
  dateText: {
    fontSize: moderateScale(10),
  },
  moneyText: {
    color: color.GREEN,
    fontSize: 14,
    marginLeft: scale(8),
    alignSelf: 'flex-start',
    width: scale(50),
    textAlign: 'center',
  },
  agentView: {
    width: scale(92),
    height: scale(29),
    marginLeft: scale(18),
    borderRadius: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.GREY,
  },
  agentText: {
    color: '#FFF',
    fontSize: 10,
  },
  icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
  button: {
    width: scale(158),
    height: verticalScale(29),
  },
  buttonText: {
    fontSize: 10,
  },
});

class UserListItem extends React.Component<UserListItemProps> {
  renderButton() {
    return (
      <RoundedButton
        style={styles.button}
        textStyle={styles.buttonText}
        text="Send Invitation"
        gradient
      />
    );
  }

  renderMoreInfo() {
    return (
      <TouchableOpacity style={styles.iconContainer}>
        <Image style={styles.icon} source={MORE_MENU_IMAGE} />
      </TouchableOpacity>
    );
  }

  renderAmmount() {
    const { ammount } = this.props;
    return (
      <MoneyText
        withIcon={false}
        ammount={ammount}
        style={styles.moneyText}
        variant="Bold"
      />
    );
  }

  renderCloseInfo() {
    return (
      <TouchableOpacity style={styles.iconContainer}>
        <Image style={styles.icon} source={CLOSE_IMAGE} />
      </TouchableOpacity>
    );
  }

  renderRightComponent() {
    const { rightIconType } = this.props;
    if (rightIconType === 'button') return this.renderButton();
    if (rightIconType === 'close') return this.renderCloseInfo();
    if (rightIconType === 'menu') return this.renderMoreInfo();
  }

  renderMiddleInfo() {
    return (
      <View style={styles.agentView}>
        <Text variant="SemiBold" style={styles.agentText}>
          AGENT
        </Text>
      </View>
    );
  }

  render() {
    const { phoneNumber, dateTime, withMiddleInfo, ammount } = this.props;
    return (
      <View style={{ ...styles.container, ...this.props.style }}>
        <View>
          <PhoneNumberText
            style={styles.phoneText}
            numberOfLines={1}
            variant="Medium"
            phoneNumber={phoneNumber}
          />
          <Text style={styles.dateText}>{moment(dateTime).fromNow()}</Text>
        </View>
        {withMiddleInfo && this.renderMiddleInfo()}
        {ammount && this.renderAmmount()}
        {this.renderRightComponent()}
      </View>
    );
  }
}

UserListItem.defaultProps = {
  dateTime: new Date(),
  rightIconType: 'menu',
};

export default UserListItem;
