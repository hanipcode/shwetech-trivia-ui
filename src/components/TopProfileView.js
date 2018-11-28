import React from 'react';
import { View, ViewProps, Image, StyleSheet } from 'react-native';
import Text from './Text';
import HeaderOrnamentView from './HeaderOrnamentView';
import MoneyText from './MoneyText';
import PhoneNumberText from './PhoneNumberText';
import RoundedButton from './RoundedButton';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

type TopProfileViewProps = ViewProps & {
  avatarUri: string,
  phoneNumber: string,
  balance: number | string,
  onAvatarPress: Function,
  onAccountPress: Function,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: verticalScale(18),
  },
  avatar: {
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: moderateScale(37.5),
    backgroundColor: '#FFF',
  },
  firstColumn: {
    width: scale(135),
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
  },
  whiteNumberText: {
    color: '#FFF',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(16),
  },
  whiteText: {
    color: '#FFF',
  },
  button: {
    width: scale(134),
    height: verticalScale(42),
    marginTop: verticalScale(22),
    alignSelf: 'flex-end',
  },
});

const TopProfileView = (props: TopProfileViewProps) => (
  <HeaderOrnamentView style={styles.container} {...props}>
    <View style={styles.firstColumn}>
      <Image
        source={{ uri: props.avatarUri, width: 100, height: 100 }}
        style={styles.avatar}
      />
    </View>
    <View style={styles.secondColumn}>
      <Text variant="SemiBold" style={styles.headerText}>
        Account
      </Text>
      <PhoneNumberText
        style={styles.whiteNumberText}
        phoneNumber={props.phoneNumber}
      />
      <MoneyText style={styles.whiteText} ammount={props.balance} />
      <RoundedButton style={styles.button} outline text="Account" />
    </View>
  </HeaderOrnamentView>
);

TopProfileView.defaultProps = {
  avatarUri: 'https://robohash.org/63.143.42.242.png',
  onAvatarPress: () => false,
  onAccountPress: () => false,
};

export default TopProfileView;
