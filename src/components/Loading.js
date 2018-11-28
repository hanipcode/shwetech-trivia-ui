// @flow
import React from 'react';
import { View, StyleSheet, ActivityIndicator, Modal } from 'react-native';

type LoadingProps = {
  visible: boolean,
};

const Loading = ({ visible }: LoadingProps) => (
  <Modal transparent onRequestClose={() => false} visible={visible}>
    <View
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color="orange" style={{ flex: 1 }} />
    </View>
  </Modal>
);

export default Loading;
