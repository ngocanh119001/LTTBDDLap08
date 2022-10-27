import React from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native'; // and this

export default class BellAnimation extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      amin: new Animated.Value(0),
    };
  } // now we want to animate the state now it will automaticaly updated

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.amin, {
          toValue: -1, // so i add the delay here
          duration: 100,
          delay: 800,
          
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: -1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: 0,
          duration: 100,
        }),
      ]),
    ).start();
  }

  render = () => {
    const rotation = this.state.amin.interpolate({
      inputRange: [-1, 1], // left side to right side
      outputRange: ['-10deg', '10deg'], // before that we have to check now it's perfect
    });
    return (
      <View style={style.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginVertical: 100,
            color: 'red',
            fontWeight: 'bold',
          }}></Text>
        <Animated.View
          style={{alignSelf: 'center', transform: [{rotate: rotation}]}}>
          <Image
            source={require('../assets/notification.png')}
            style={{fontSize: 40}}></Image>
        </Animated.View>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});