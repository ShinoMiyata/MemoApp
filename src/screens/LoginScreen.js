import React from 'react';
import { StyleSheet,View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {

   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
   .then((user) => {
      this.props.navigation.navigate('Home');
   })
   .catch(function(error) {
      console.log('error!!', error);
  });



  /*
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigateToHome();
      })
      .catch();
      */
  }

  render() {
    return(
      <View style={styles.container}>
            <Text style={styles.title}>
            ログイン
            </Text>
            <TextInput
            style={styles.input} 
            value={this.state.email} 
            onChangeText={(text) => { this.setState({ email: text }); }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
            underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              value={this.state.Password}
              onChangeText={(text) => { this.setState({ password: text }); }}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
            <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}  underlayColor="#C70F66">
              <Text style={styles.buttonTitle}>ログインする</Text>
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


export default LoginScreen;