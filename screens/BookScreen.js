import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function BookScreen({route}) {

const book = route.params;

if("imageLinks" in book.volumeInfo) {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>{book.volumeInfo.title}</Text>
                <View style={styles.container}>
                <Image style ={styles.image}
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}/>
                </View>
                <Text style={styles.subtitle}>{book.volumeInfo.subtitle}</Text>
                <Text style={styles.description}>{book.volumeInfo.description}</Text>
                <Text style={styles.author}>{book.volumeInfo.authors}</Text>
            </View>
        </ScrollView>
    )
} else {
    return(
    <ScrollView>
    <View>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
        <Text style={styles.subtitle}>{book.volumeInfo.subtitle}</Text>
        <Text style={styles.description}>{book.volumeInfo.description}</Text>
        <Text style={styles.author}>{book.volumeInfo.authors}</Text>
    </View>
    </ScrollView>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        paddingHorizontal: 20,
        paddingBottom:20,
        fontSize: 18,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30
    },
        author: {
        marginBottom: 30,
        textAlign: 'right',
        marginRight: 20,
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: contain
    }
})