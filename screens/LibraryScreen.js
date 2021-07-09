import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'
// clé API : AIzaSyCZ7OqUB8WRUCtBRKabER6fptWDNtL6jVs
// lienURL : https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCZ7OqUB8WRUCtBRKabER6fptWDNtL6jVs

export default function LibraryScreen({navigation}) {
    
  // Création d'un tableau d'une bibliothèque
    const [arrayBooks, setArrayBooks] = useState([]);
  // Création des recherches 
    const [searchBook, setSearchBook] = useState("");

      const updateSearch = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=AIzaSyCZ7OqUB8WRUCtBRKabER6fptWDNtL6jVs`)
        .then(res => {
          setArrayBooks(res.data.items);
        })
      }


      return (
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Book Search App</Text>  
            {/* <Text>{BookJSX}{AuthorJSX}{DescriptionJSX}</Text> */}
            <TextInput style={styles.input} onChangeText={e => {setSearchBook(e)}} value={searchBook} />
            <Button onPress={updateSearch} title="Rechercher" />
        </View>
        <FlatList
      // données des utilisateurs
        data={arrayBooks}

        renderItem={({item})=> (
          <ListItem bottomDivider onPress={() => navigation.navigate('Details',item)} >
          <ListItem.Content>
            <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
            <ListItem.Title>{item.volumeInfo.Authors}</ListItem.Title>
            <ListItem.Subtitle>{item.volumeInfo.Description}</ListItem.Subtitle>
          </ListItem.Content>
          </ListItem>)
        }
        keyExtractor={item => item.id.toString()}
      />
        </ScrollView>
      );
    }

  // Utilisation de styleSheet pour pouvoir réaliser du CSS
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      backgroundColor: '#ccb19c',
      height: 25,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
    },
});
