import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './src/Screens/Homescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Homescreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
