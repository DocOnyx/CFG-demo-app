import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen( { navigation, route }) {
  const [name, setName] = React.useState('')

  React.useEffect(() => {
    console.log('Home screen has mounted')
  }, []);

  React.useEffect(() => {
    console.log('Name has updated')
  }, [name]);

  const user = useSelector((state) => state.logged_in_user);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello {user}</Text>
      <Text style={styles.text}>Welcome to my Demo App!{'\n'}This is a demo app for CFG mobile app course</Text>
      <Text style={styles.text}>Name: {name}</Text>
     
      <Button 
          color='#7d8e95'
          title="View Screen Page" 
          onPress={() =>
          navigation.navigate('View')
        }/>
        <Button 
          color='#7d8e95'
          title="Show Name" 
          onPress={() =>
          setName(`${name}N`)
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
    textAlign: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#344648',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    textDecorationLine: 'underline',
  },
});
