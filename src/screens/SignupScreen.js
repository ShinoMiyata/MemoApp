import React from 'react';
import { StyleSheet,View, Text, TextInput, TouchableHighlight } from 'react-native';

import CircleButton from '../elements/CircleButton';

class SignupScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
            <Text style={styles.title}>
            メンバー登録
            </Text>
            <TextInput style={styles.input} multiline value="Email Address" />
            <TextInput style={styles.input} multiline value="Password" />
            <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#C70F66">
              <Text style={styles.buttonTitle}>送信する</Text>
            </TouchableHighlight>
      </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingTop: 14,
    paddingRight: 8,
    paddingLeft: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',

  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});


export default SignupScreen;