import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, useColorScheme } from 'react-native';
import LittleLemonFooter from './LittleLemonFooter';
import LittleLemonHeader from './LittleLemonHeader';

export default function WelcomeScreen() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'light' ? '#fff' : '#000';
    const input_textColor = colorScheme === 'light' ? '#000' : '#fff';
    const input_background = colorScheme === 'light' ? '#fff' : '#000';
    const placeholderTextColor = colorScheme === 'light' ? '#888' : '#666';

    return (
        <ScrollView
            style={[
                colorScheme === 'light'
                    ? { backgroundColor: '#333333' }
                    : { backgroundColor: '#fff' },
            ]}
            keyboardDismissMode="on-drag">
                <LittleLemonHeader />
            <View style={style.mainview}>
                <Image
                    style={style.logo}
                    source={require('../images/LittleLemonLogo.png')}
                    resizeMode="contain"
                />
            </View>

            <Text style={[style.wtll, { color: textColor }]}>
                Welcome To Little Lemon
            </Text>
            <Text style={[style.nestedwtll, { color: textColor }]}>
                Little Lemon is a charming neighborhood bistro that
                serves simple food and classic cocktails in a lively
                but casual environment. We would love to hear more
                about your experience with us!
            </Text>
            <TextInput
                style={[style.textinput, { backgroundColor: input_background }, { color: input_textColor }]}
                placeholder='First Name'
                value={firstName}
                placeholderTextColor={placeholderTextColor}
                onChangeText={setFirstName} />
            <TextInput
                style={[style.textinput, { backgroundColor: input_background }, { color: input_textColor }]} placeholder='Last Name'
                value={lastName}
                placeholderTextColor={placeholderTextColor}
                onChangeText={setLastName} />
            <TextInput
                style={[style.textinput, { backgroundColor: input_background }, { color: input_textColor }]} placeholder='Message'
                value={message}
                placeholderTextColor={placeholderTextColor}
                onChangeText={setMessage}
                multiline={true} />
            <LittleLemonFooter />
        </ScrollView>
    );
};

const style = StyleSheet.create({
    mainview: {
        flex: 1,
        alignItems: 'center',
    },
    wtll: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff',
        marginTop: 36
    },
    nestedwtll: {
        textAlign: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        color: '#fff',
        fontSize: 25
    },
    textinput: {
        backgroundColor: '#fff',
        fontSize: 20,
        color: '#000',
        margin: 10,
        padding: 10
    },
    logo: {
        width: 200,
        height: 200,
        // borderWidth: 2,
        // borderColor: 'red',
        // borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});