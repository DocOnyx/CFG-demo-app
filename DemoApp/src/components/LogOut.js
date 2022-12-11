import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';


export default function LogOutButton({ navigation }) {

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
    <TouchableOpacity 
    style={styles.buttonStyle}
    onPress={() => {
        logOutUser();
        navigation.navigate('Log In')
      }}>
      <Text style={styles.textStyle}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
    marginBottom: 10,
    borderRadius: 15

  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 20,
    textAlign: 'center'
  }
})