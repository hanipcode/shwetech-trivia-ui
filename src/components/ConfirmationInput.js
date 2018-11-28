// @flow
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  // $FlowFixMe
  ViewProps,
  // $FlowFixMe
  TextInputProps,
} from 'react-native';
import color from '../themes/color';

type ConfirmationInputProps = ViewProps & {
  codeLength?: number,
  textInputProps?: TextInputProps,
  onChangeText: (textList: string) => void,
};

type ConfirmationInputState = {
  codeTextList: string[],
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24,
  },
  input: {
    color: '#FFF',
    marginHorizontal: 6,
    paddingHorizontal: 18,
    fontSize: 42,
    fontFamily: 'Montserrat-Bold',
  },
});

class ConfirmationInput extends React.Component<
  ConfirmationInputProps,
  ConfirmationInputState
> {
  inputListComponent: Array<TextInput> = [];
  static defaultProps = {
    codeLength: 4,
    textInputProps: {},
  };

  constructor(props: ConfirmationInputProps) {
    super(props);
    let initialList = [];
    for (let i = 0; i < props.codeLength; i++) {
      initialList.push('');
    }
    this.state = {
      codeTextList: initialList,
    };
    // $FlowFixMe
    this.inputListComponent = initialList.map(() => <TextInput />);
  }

  onInputChange(index: number, text: string) {
    const { codeLength, onChangeText } = this.props;
    const { codeTextList } = this.state;
    const lastIndex = codeLength - 1;
    codeTextList[index] = text;
    this.setState({ codeTextList }, () => {
      if (index !== lastIndex && text !== '') {
        this.inputListComponent[index + 1].focus();
        this.inputListComponent[index + 1].clear();
      } else if (index !== 0 && text === '') {
        this.inputListComponent[index - 1].focus();
        this.inputListComponent[index - 1].clear();
      }
      onChangeText(codeTextList.join(''));
    });
  }

  renderInputs() {
    const { textInputProps } = this.props;
    const { codeTextList } = this.state;
    return codeTextList.map((text, index) => (
      <TextInput
        ref={input => {
          this.inputListComponent[index] = input;
        }}
        value={codeTextList[index]}
        underlineColorAndroid="#FFF"
        onChangeText={text => this.onInputChange(index, text)}
        maxLength={1}
        key={() => `input-${text}-${index}`}
        keyboardType="numeric"
        {...textInputProps}
        style={{
          ...styles.input,
          ...textInputProps.style,
        }}
      />
    ));
  }

  render() {
    return (
      <View
        style={{
          ...styles.container,
          ...this.props.style,
        }}
      >
        {this.renderInputs()}
      </View>
    );
  }
}

export default ConfirmationInput;
