import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default function LogInScreen( { navigation, route }) {
  
  return (
    <View style={styles.bigContainer}>
       <Text style={styles.text}>Hi,{"\n"}This is a Demo App.{"\n"}Click the Log In button to view the next screen</Text>
        <Input 
            placeholder="Username"
            leftIcon={{ type: 'simple-line-icon', name: 'user' }} />
        <Input 
            placeholder="Password"
            leftIcon={{ type: 'simple-line-icon', name: 'lock' }}
            secureTextEntry={true} />
        <Button
            onPress={() =>
            navigation.navigate('Tabs')}
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
