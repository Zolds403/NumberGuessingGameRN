import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View styles={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
});

export default StartGameScreen;