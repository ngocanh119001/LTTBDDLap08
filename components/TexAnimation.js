import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Button,
} from 'react-native';
const TexAnimation = () => {
  const move = useRef(new Animated.Value(0)).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(move, {
      toValue: 370,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };
  const stop = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).stop();
  };
  const restart = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.Main}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.top,
            {
              translateX: move,
            },
          ]}>
          <Image
            source={require('../assets/car.jpg')}
            size={30}
            color="black"></Image>
        </Animated.View>

        <View>
          <Button title="Start" onPress={start} />
          <Button title="Stop" onPress={stop} />
          <Button title="Resest" onPress={restart} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
  },

  textCon: {
    padding: 20,
    backgroundColor: 'violet',
  },
  text: {
    fontSize: 20,
  },
});

export default TexAnimation;