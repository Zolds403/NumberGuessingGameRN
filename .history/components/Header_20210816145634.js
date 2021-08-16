import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styes.headerTitle}>{props.title}</Text>
        </View>
    )
};

consr styles = StyleSheet.create({});

export default Header;