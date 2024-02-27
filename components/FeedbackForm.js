import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';

export default function FeedbackForm() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [message, setMessage] = React.useState('')
    return (
        <View style={style.mainview}>
            <ScrollView keyboardDismissMode="on-drag">
                <LittleLemonHeader />
                <Text style={style.wtll}>
                    How was your visit to Little Lemon?
                </Text>
                <Text style={style.nestedwtll}>
                    Little Lemon is a charming neighborhood bistro that
                    serves simple food and classic cocktails in a lively
                    but casual environment. We would love to hear more
                    about your experience with us!
                </Text>
                <TextInput
                    style={style.textinput}
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={setFirstName} />
                <TextInput
                    style={style.textinput}
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={setLastName} />
                <TextInput
                    style={style.textinput}
                    placeholder='Please Leave Feedback'
                    value={message}
                    onChangeText={setMessage}
                    multiline={true} />
                    <LittleLemonFooter />
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    mainview: {
        alignItems: 'center',
    },
    wtll: {
        fontSize: 36,
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
        backgroundColor: '#F4CE14',
        fontSize: 20,
        color: '#000',
        margin: 10,
        padding: 10
    }
});