import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({navigation}) {


    let [fontsLoaded] = useFonts({
      'ZenTokyoZoo': require('../assets/fonts/ZenTokyoZoo-Regular.ttf'),
    });

    if (!fontsLoaded) {
      return <Text>Loading...</Text>
    } else {
      return (
          <View style={styles.container}>
          <Image
          style={styles.logo}
          source={require('../assets/book-computer.png')}
          />
        <View>
        <Text style={styles.title}>My amazing library</Text>
        </View>
        <Text>
          <Button onPress = {()=> navigation.navigate('Library')}
          title='Commencer'/>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 250,
      height: 150,
    },
    button: {
      backgroundColor: '#D3D3D3',
    },
    title: {
      fontFamily: 'ZenTokyoZoo',
      fontSize: 40,
    },
  });
