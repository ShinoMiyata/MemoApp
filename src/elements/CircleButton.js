import React from 'react';
import * as Font from 'expo-font';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
      fontLoaded: false,
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      FontAwesome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return(
          <TouchableHighlight style={[styles.container ,style]} onPress={onPress}>
            <View style={[styles.circleButton, { backgroundColor: bgColor}]}>
                {
                  this.state.fontLoaded ? (
                      <Text style={[styles.circleButtonTitle, { color: textColor}]}>
                        {this.props.children}
                      </Text>
                    ) : null
                  }
            </View>
          </TouchableHighlight>
      );
  }
}

const styles = StyleSheet.create({
container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 48,
    height: 48,

},
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },

});

export default CircleButton;