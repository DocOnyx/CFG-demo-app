import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Card, Avatar, ListItem, Divider } from '@rneui/themed';

export default function ProfileScreen( { navigation, route }) {
  const profileItems = ['Pitches', 'Trips', 'Likes', 'Appointments', 'Updates', 'Photos', 'Setting']
  
  return (
    <View style={styles.bigContainer}>
        <View style={styles.cardContainer}>
            <Card containerStyle={{maxHeight: 180, minWidth: 200, borderRadius: 10}}>
            <Card.Title>My Profile</Card.Title>
            <Card.Divider />

              <View style={{alignItems:"center"}}>
                <Text style={styles.text}>This is my profile</Text>
              </View>
            </Card>
            <Avatar
            containerStyle={{marginTop: 20, marginRight: 15}}
            size={75}
            rounded
            source={ require('../../assets/Smiley.png')}
            />
        </View>
        <View style={styles.listContainer}>
            <FlatList
                data={profileItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <ListItem 
                  key={item.id}
                  bottomDivider 
                  containerStyle={{  backgroundColor: '#396170'}}>
                  <ListItem.Content>
                  <ListItem.Subtitle>
                    <Text style={styles.listText}>{item}</Text>
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron/>
                </ListItem>
                )}
              />
        </View>
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fbe0c3',
    justifyContent: 'space-around',
    marginBottom: 20
  },
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
  },
  listContainer: {
    backgroundColor: '#396170',
    
},
listText: {
  fontSize: 18,
  color: '#fff',
},

});
