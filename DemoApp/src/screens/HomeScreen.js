import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to my Demo App!</Text>
      <Text style={styles.text}>This is a demo app for CFG mobile app course</Text>
      <Text style={styles.text}>Hello Humans!</Text>

      <MyButton title='Click Me'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbe0c3',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    color: '#344648',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#344648',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    textDecorationLine: 'underline',
  },
 
});
