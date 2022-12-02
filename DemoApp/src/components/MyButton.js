
import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';



export default function MyButton(props) {

  function Quote() {
    let quotes = ['The art of living well and the art of dying well are one - Epicurus',
  'Social justice cannot be attained by violence. Violence kills what it intends to create - Pope John Paul II',
  'I have always found that mercy bears richer fruits than strict justice - Abraham Lincoln',
  'If a law is unjust, a man is not only right to disobey it, he is obligated to do so - Thomas Jefferson']
    console.log(quotes[Math.floor(Math.random()*quotes.length)])
  }

  return (
    <TouchableOpacity 
    style={styles.buttonStyle}
    onPress={Quote}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7d8e95',
    height: 50,
    width: 150,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50, 
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