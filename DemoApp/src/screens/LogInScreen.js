import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function LogInScreen( { navigation, route }) {
    const [username1, setUsername1] = useState('')
    const [password1, setPassword1] = useState('')
    

  const dispatch = useDispatch();

  function checkUser(userDetails){
    const action = {
      type: 'LOG_IN',
      payload: userDetails
    }
    dispatch(action)
  }

  const user = useSelector(state => state.logged_in_user);

  function logIn(userDetails){
    checkUser(userDetails);
    console.log(user);
    if (user){
      console.log('Log in successful');
      setUsername1('');
      setPassword1('');
      navigation.navigate('Tabs');
    }
    else {
      console.log('Incorrect details')
    }
  }


  return (
    <View style={styles.bigContainer}>
       <Text style={styles.text}>Hi,{"\n"}This is a Demo App.{"\n"}Now, you can log in with your details or create a new account</Text>
        <Input 
            placeholder="Username"
            leftIcon={{ type: 'simple-line-icon', name: 'user' }}
            onChangeText={value => setUsername1(value.trim())}
            value={username1} />
        <Input 
            placeholder="Password"
            leftIcon={{ type: 'simple-line-icon', name: 'lock' }}
            secureTextEntry={true}
            onChangeText={value => setPassword1(value.trim())}
            value={password1} />
        <Button
            onPress={() => {
              if (username1 && password1){
                logIn({username:username1, password: password1 });
                
              }
              else {
                alert('Enter valid username and/or password')
              }
              }}
            title="Log In"
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

<Button
            onPress={() =>
              navigation.navigate('Register')}
            title="Create account"
            icon={{
            name: 'plus',
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
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },

});
