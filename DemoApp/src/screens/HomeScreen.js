import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen( { navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to my Demo App!</Text>
      <Text style={styles.text}>This is a demo app for CFG mobile app course</Text>
      {/* <Text style={styles.text}>Hello {route.params.user}</Text> */}
      <Button 
          color='#7d8e95'
          title="View Screen Page" 
          onPress={() =>
          navigation.navigate('View')
        }/>
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
