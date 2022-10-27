import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet,SafeAreaView } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  // useEffect(() => {
  //   Animated.timing(
  //     fadeAnim,
  //     {
  //       toValue: 1,
  //       duration: 20000,
  //       useNativeDriver: true, 
  //     }
  //   ).start();
  // }, [fadeAnim])

  // return (
  //   <Animated.View                 // Special animatable View
  //     style={{
  //       ...props.style,
  //       opacity: fadeAnim,         // Bind opacity to animated value
  //     }}
  //   >
  //     {props.children}
  //   </Animated.View>
  //    );
  //   }
     this._opacityAnimationValue = new Animated.Value(0);
  this._moveAnimationValue = new Animated.ValueXY();


Animated.parallel([
	Animated.timing(this._moveAnimationValue, {
	toValue: 0,
  duration: 5000

	}),
	Animated.timing(this._opacityAnimationValue, {
	 toValue: 1,
  duration: 10000
	})
]).start()

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{opacity: this._opacityAnimationValue, transform: this._moveAnimationValue.getTranslateTransform()}}>
        <Text style={{fontSize:18,fontWeight:"bold", alignItems:"center", color:"green"}}>Welcome to Animation React Native</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
   
    export default FadeInView;