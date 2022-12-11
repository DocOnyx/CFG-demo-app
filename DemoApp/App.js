import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from './src/screens/LogInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigators/navigators';
import RegisterScreen from './src/screens/Register';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { userReducer } from './src/redux/reducers';
import { state} from './src/redux/store';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';


const Stack = createNativeStackNavigator();




export default function App(){
  const store = createStore(userReducer, state)

  return (
    <Provider store={store}> 
      <AppWrapper />
    </Provider>
  )
}


function AppWrapper() {

  const dispatch = useDispatch();

  function logOutUser(){
    const action = {
      type: 'LOG_OUT',
      payload: ''
    }
    console.log('Logging out user ...')
    dispatch(action)
  }


  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Log In'>
        <Stack.Screen 
            name="Log In" 
            component={ LogInScreen }
            options={{title: ''}}/>
          <Stack.Screen 
            name="Tabs" 
            component={ Tabs }
            options={({ navigation }) => ({
              title: '',
              headerLeft: () => (
              <Button
                onPress={() => {
                  logOutUser();
                  navigation.goBack();
                }}
                title="Log Out"
                color="red"
              />)})}
        />
        <Stack.Screen 
            name="Register" 
            component={ RegisterScreen }
            options={{title: '', headerBackVisible: false}}/>
      </Stack.Navigator>
     </NavigationContainer>
    
  );
}

