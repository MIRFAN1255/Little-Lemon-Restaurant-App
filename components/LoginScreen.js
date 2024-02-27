import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import LittleLemonHeader from './LittleLemonHeader';
import LittleLemonFooter from './LittleLemonFooter';

export default function LoginScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loggedIn, setOnLogIN] = React.useState(false);
    return (
        <ScrollView
            style={style.SV}
            keyboardDismissMode="on-drag">
            <LittleLemonHeader />

            {!loggedIn && (
                <View>
                    <Text style={style.wtll}>
                        Welcome To Little Lemon
                    </Text>
                    <Text style={style.nestedwtll}>
                        Login to Continue
                    </Text>
                    <TextInput
                        style={style.textinput}
                        placeholder='email'
                        value={email}
                        onChangeText={setEmail} />
                    <TextInput
                        style={style.textinput}
                        placeholder='password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true} />
                </View>
                
            )}
            <Pressable
                style={style.pressable_button}
                onPress={() => {
                    setOnLogIN(!loggedIn);
                }}>
                <Text style={style.button_text}>
                    {loggedIn ? 'Home' : 'Log in'}
                </Text>
            </Pressable>
          
            {loggedIn && (
                <View>
                    <Text style={style.wtll}>
                        Welcome To Little Lemon
                    </Text>
                    <Text style={style.wtll}>You are logged in!</Text>
                    <View style={style.footer}>
                        <LittleLemonFooter />
                    </View>
                </View>
                
            )}
            
        </ScrollView>

    );
};

const style = StyleSheet.create({
    SV: {
        flex: 1,
        backgroundColor: 'red'
    },
    wtll: {
        fontSize: 36,
        textAlign: 'center',
        color: '#fff',
        padding: 40
    },
    nestedwtll: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        padding: 20,
        marginVertical: 8,
    },
    textinput: {
        backgroundColor: '#fff',
        fontSize: 20,
        color: '#000',
        margin: 10,
        padding: 5,
        paddingStart: 10,
    },
    pressable_button: {
        fontSize: 20,
        padding: 8,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EDEFEE',
        // borderWidth: 3,
        borderRadius: 50
    },
    button_text: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white'
    }
});