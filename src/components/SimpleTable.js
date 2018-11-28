import React from 'react';
import { View, StyleSheet, ViewProps, Dimensions } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { verticalScale } from 'react-native-size-matters';

import Text from '../components/Text';
import color from '../themes/color';

const { width } = Dimensions.get('window');

type ColumnType = {
  index: number,
  title: string,
  dataIndex: string,
  marginRight: number,
  marginLeft: number,
};

type SimpleTableProps = ViewProps & {
  columns: ColumnType[],
  dataIndex: Array,
  isCentered: boolean,
};

class SimpleTable extends React.Component<SimpleTableProps> {
  renderHeader() {
    const { columns } = this.props;
    return (
      <View style={styles.headerContainer}>
        {columns.map(columnData => (
          <Text style={styles.headerText} variant="Bold">
            {columnData.title}
          </Text>
        ))}
      </View>
    );
  }

  renderCenteredHeader() {
    const { columns } = this.props;
    return (
      <View style={styles.headerContainerCenter}>
        {columns.map(columnData => (
          <View style={styles.headerItemCenter}>
            <Text style={styles.headerText} variant="Bold">
              {columnData.title}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  renderRow({ item }) {
    const { isCentered } = this.props;
    if (isCentered) {
      return this.renderCenteredRow(item);
    }
    return this.renderNormalRow(item);
  }

  renderNormalRow(item) {
    const { columns } = this.props;
    return (
      <View style={styles.itemContainer}>
        {columns.map(columnData => (
          <Text>{item[columnData.dataIndex]}</Text>
        ))}
      </View>
    );
  }

  renderCenteredRow(item) {
    const { columns } = this.props;
    return (
      <View style={styles.itemContainerCenter}>
        {columns.map(columnData => (
          <View style={styles.itemCenter}>
            <Text>{item[columnData.dataIndex]}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    const { dataIndex, style, isCentered } = this.props;
    return (
      <View {...this.props} style={style}>
        {isCentered ? this.renderCenteredHeader() : this.renderHeader()}
        <KeyboardAwareFlatList
          data={dataIndex}
          showsVerticalScrollIndicator
          renderItem={item => this.renderRow(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

SimpleTable.defaultProps = {
  isCentered: false,
};

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
    alignItems: 'center',
  },
  headerText: {
    color: color.DARK_ORANGE,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalScale(35),
    alignItems: 'center',
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
    alignItems: 'center',
  },
});

export default SimpleTable;
