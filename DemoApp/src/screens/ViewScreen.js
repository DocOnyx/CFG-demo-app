import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MyButton from '../components/MyButton';


class ViewScreen extends React.Component {
    constructor (){
        super()
        this.state = {counter: 0, action: '', data: []}
    }
    update = () => {
        this.setState({counter:this.state.counter + 1})
        this.setState({action:'Clicked'})

    }

    fetchData = async () => {
        fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
          }
        })
        .then(response => { return response.json() })
        .then( d => { this.setState({ data: d}) } )
        .catch(err => {console.log(`ERROR: ${err}`)})
      }

    componentDidUpdate () {
        console.log(`The new counter is ${this.state.counter}`)
        console.log(` ${this.state.action}`)
        console.log(`${this.state.data}`)

    }
    componentDidMount() {
        let currentTime = Date().toLocaleString()
        console.log(`View screen mounted at ${currentTime}`)
    }

    render(){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>View Screen</Text>
        <Text style={styles.text}>Just trying out different functionalities.{ '\n' }
        This is a new line.{ '\n' }Now click the button to console log random quotes</Text>
        <Image source={ require('../../assets/Smiley.png')}
             style={{ width: 100, height: 100 }}/>
        <Text>Mood: { this.state.data.mood }</Text>
        <MyButton title='Random Quote'/>
          <Button title="Home Page" 
           accessibilityLabel='go to Home Page button'
         color='#7d8e95' onPress={() =>
          this.props.navigation.navigate('Home',{ user: "Someone" })
        }/>
        <Button title="Click Here" color='#7d8e95' onPress={this.update} accessibilityLabel='Click here button'/>
        <Button title="New Data" color='#7d8e95' onPress={this.fetchData}  accessibilityLabel='New data button'/>
        <StatusBar style="auto" />
      </View>
    );
  }
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
    textAlign: 'center'
  },
  heading: {
    color: '#344648',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    textDecorationLine: 'underline',
  },
 
});

export default ViewScreen;