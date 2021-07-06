import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LibraryScreen({route}) {
    
    
    return (
        <View style={styles.container}>
            <Text>Welcome to Hello Books</Text>   
            <Text>Where are all my books I've already read ??</Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
