import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FadeInView from './components/FadeInView';
import BellAnimation from './components/BellAnimation';
import Circle from './components/Circle';
import MoveX from './components/MoveX';
import Move from './components/Move';
import Cau4 from './components/Cau4';
import TexAnimation from './components/TexAnimation';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Cau 1 */}
      <FadeInView style={{height: 50 }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Welcome to Animation</Text>
      </FadeInView> 

       {/* Cau 2 */}
      {/* <MoveX/> */}

      {/* Cau 3 */}
      {/* <TexAnimation/> */}

      {/* Cau 4 */}
      {/* <Cau4/> */}

       {/* Cau 5 */}
      {/* <Move/> */}

      {/* Cau 6 */}
      {/* <BellAnimation/> */}

      {/* Cau 7 */}
      <Circle/> 
      
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
