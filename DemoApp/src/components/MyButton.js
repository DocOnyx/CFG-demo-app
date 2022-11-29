
import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';



export default function MyButton(props) {

  function Quote() {
    let quotes = ["A bird in hand ...", "Make hay while the sun shines", "It is just to rebel against injustice"]
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
    height: 40,
    width: 100,
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
    fontSize: 20
  }
})