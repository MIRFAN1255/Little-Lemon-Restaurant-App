import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={style.header}>
            <Text style={style.text}>Little Lemon</Text>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        backgroundColor: '#F4CE14',
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36, 
        color: '#000',
    }
});