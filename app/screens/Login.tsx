import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

        } catch (error: any) {
            console.log(error);
            alert('Sign In failed:' + error.message)
        } finally {
            setLoading(false);
        }
    }
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign In failed:' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome Back!</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                    />
                    <TextInput
                        secureTextEntry
                        value={password}
                        style={styles.input}
                        placeholder="Password"
                        autoCapitalize='none' onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Login" onPress={signIn} />
                    <Button title="Sign Up" onPress={signUp} />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 50,
        paddingHorizontal: 16
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 48
    },
    title: {
        fontSize: 28,
        fontWeight: '600'
    },
    inputContainer: {
        marginBottom: 32
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 4,
        marginBottom: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Login
