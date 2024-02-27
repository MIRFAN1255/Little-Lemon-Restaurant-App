import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={style.footer}>
            <Text style={style.text}>All rights reserved by Little Lemon, 2023</Text>
        </View>
    );
};

const style = StyleSheet.create({
    footer: {
        backgroundColor: '#F4CE14',
        //  height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontStyle:'italic',
    }
});