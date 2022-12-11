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
import LogOutButton from './src/components/LogOut';


const Stack = createNativeStackNavigator();




export default function App(){

  const store = createStore(userReducer, state)
  

  return (
    <Provider store={store}> 
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
                <LogOutButton navigation={navigation}/>)
              })}
        />
        <Stack.Screen 
            name="Register" 
            component={ RegisterScreen }
            options={{title: '', headerBackVisible: false}}/>
      </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}

