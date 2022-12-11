import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function RegisterScreen( { navigation, route }) {
    const [username1, setUsername1] = useState('')
    const [password1, setPassword1] = useState('')
    

  const dispatch = useDispatch();

  function addUser(userDetails){
    const action = {
      type: 'ADD_USER',
      payload: userDetails
    }
    dispatch(action)
  }



  return (
    <View style={styles.bigContainer}>
       <Text style={styles.text}>Hi,{"\n"}This is a Demo App.{"\n"}Click the Log In button to view the next screen</Text>
        <Input 
            placeholder="Username"
            leftIcon={{ type: 'simple-line-icon', name: 'user' }}
            onChangeText={value => setUsername1(value.trim())} />
        <Input 
            placeholder="Password"
            leftIcon={{ type: 'simple-line-icon', name: 'lock' }}
            secureTextEntry={true}
            onChangeText={value => setPassword1(value.trim())} />
       

<Button
            onPress={() =>{
                if (username1 && password1){
              addUser({username:username1, password: password1 });
              navigation.navigate('Log In')}
            else {
                alert('Enter a valid username and/or password')
            }}}
            title="Register"
            icon={{
            name: 'login',
            type: 'simple-line-icon',
            size: 15,
            color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
            backgroundColor: '#396170',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
            }}
            containerStyle={{
            width: 250,
            height: 50,
            marginHorizontal: 50,
            marginVertical: 10,
            }}
        />
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  bigContainer: {
      flex:1,
      backgroundColor: '#fbe0c3',
      justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    color: '#344648',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },

});
