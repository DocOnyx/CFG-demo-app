import HomeScreen from "../screens/HomeScreen";
import ViewScreen from "../screens/ViewScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false
      }}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{tabBarIcon: () =>
            (<Icon
                type='simple-line-icon'
                name='home'/>)}} />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{tabBarIcon: () =>
                (<Icon
                    type='simple-line-icon'
                    name='user'/>)}} /> 
        <Tab.Screen 
            name="View" 
            component={ViewScreen} 
            options={{tabBarIcon: () =>
                (<Icon
                    type='simple-line-icon'
                    name='eye'/>)}} />
      </Tab.Navigator>
    );
  }

