import React from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValueHolder: new Animated.Value(0)
    };
  }
  componentDidMount = () => {
    this.startImageRotateFunction();
  }
  startImageRotateFunction = () => {
    Animated.loop(Animated.timing(this.state.rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    })).start();
  };

render(){
    return(
      <SafeAreaView>
        <View>
          <Animated.Image
            style={{
              width: 200,
              height: 200,
              alignSelf:"center",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
            source={require('../assets/circle.jpg')}
          />
          {/* <TouchableHighlight
            onPress={() => this.startImageRotateFunction()}>
            <Text style={{textAlign:"center"}}>
              CLICK HERE
            </Text>
          </TouchableHighlight> */}
        </View>
      </SafeAreaView>
    );
  }
}