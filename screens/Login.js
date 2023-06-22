/* import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableHighlight, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { get, post } from "../api/client";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

const schema = yup.object().shape({
    email: yup.string().email('Introduce un email válido').required('Introduce un email'),
    password: yup.string().required('Introduce una contraseña'),
});

export default function Login({ navigation }) {

    //Icono ajustes
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableHighlight
                    onPress={() => { navigation.navigate("AddExercise") }}>
                    <Ionicons name="settings-sharp" color="white" size={25} />
                </TouchableHighlight>
            ),
        });

        const focusHandler = navigation.addListener('focus', () => {
            
        });

        return focusHandler;

    }, [navigation]);



    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    React.useEffect(() => {
        console.log("errors");
        console.log(errors);
    }, [errors]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.content]}>
                    <View style={[styles.box]}>
                        <Text style={[styles.text, styles.userText]}>Email o usuario</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (

                                <TextInput
                                    style={[styles.userInput,]}
                                    onBlur={onBlur}
                                    placeholderTextColor="black"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                            defaultValue=""
                        />
                        {errors?.email && <Text style={[styles.errorTrue]}>{errors.email.message}</Text>}

                        <Text style={[styles.text, styles.userText]}>Contraseña</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.userInput]}
                                    secureTextEntry
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="password"
                            defaultValue=""
                        />
                        {errors?.password && <Text style={[styles.errorTrue]}>{errors.password.message}</Text>}
                    </View>
                    <TouchableHighlight underlayColor='#102739' style={[styles.loginButton]} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.text}>Ingresar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#102739' style={[styles.text, styles.registerButton]} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.text}>Registro</Text>
                    </TouchableHighlight>

                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#c1cad3',
    },
    scrollView: {
        marginTop: 10
    },
    header: {
        height: 100,
        width: "95%",
        position: 'absolute',
        left: 10,
        right: 10,
        top: 0,
        backgroundColor: '#625fd4',
        zIndex: 10,
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 5,
    },
    content: {
        alignItems: 'center',
    },
    box: {
        width: "95%",
        //backgroundColor: '#333',
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#102739',
        flexDirection: 'column',
    },
    userText: {
        alignSelf: 'flex-start',
        marginBottom: 5
    },
    userInput: {
        backgroundColor: "white",
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 5
    },
    errorTrue: {
        color: "white",
        width: '100%',
        height: 20,
        borderRadius: 5,
        marginBottom: 5,
        borderColor: "#DB5757",
        borderWidth: 2,
        paddingLeft: 5
    },
    loginButton: {
        width: '95%',
        backgroundColor: '#625fd4',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    registerButton: {
        width: '95%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#102739',
    },

    text: {
        color: 'white'
    },
    strenghtProgressContainer: {
        alignItems: 'center',
    },
    smallText: {
        color: 'white',
        fontSize: 12
    },
    boldText: {
        color: 'white',
        fontWeight: "300",
    }
}); */

import React, { Component } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { View, SafeAreaView, StyleSheet, Image, Alert, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Text } from "react-native";
//import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import BasicTextInput from '../components/BasicTextInput';
import PasswordInputText from '../components/PasswordInputText';
import { connect } from 'react-redux';

import {
    signinUser,
} from '../redux/actions';

const APP_VERSION = "v3.0.5";

class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', error: '' };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        if ('' !== this.state.username.trim() && '' !== this.state.password.trim()) {
            this.props.signinUser(this.state, this.props.navigation)
        }
        else {
            // Works on both iOS and Android
            Alert.alert(
                'Error en la autenticación',
                'Debe indicar un usuario y/o contraseña',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Image source={require('../assets/images/reparte.png')} style={styles.welcomeImage} />
                            <Text style={styles.title}>Acceso sistema</Text>
                            <BasicTextInput
                                label='Usuario'
                                placeholder="Introduce el usuario"
                                onChangeText={(username) => this.setState({ username: username })}
                                value={this.state.username}
                                clearButtonMode='while-editing' />
                            <Input
                                containerStyle={styles.container}
                                inputStyle={styles.input}
                                labelStyle={styles.text}
                                inputContainerStyle={styles.inputContainer}
                                placeholderTextColor='#CCC'
                                editable
                                maxLength={40}
                                
                                label='Usuario'
                                placeholder="Introduce el usuario"
                                onChangeText={(username) => this.setState({ username: username })}
                                value={this.state.username}
                                clearButtonMode='while-editing'
                            />
                            <PasswordInputText
                                placeholder="Introduce la contraseña"
                                value={this.state.password}
                                label='Contraseña'
                                onChangeText={(password) => this.setState({ password })} />
                            <View style={styles.buttonContaniner}>
                                <Button large title='Acceder' buttonStyle={styles.button} titleStyle={styles.buttonTitle}
                                    onPress={() => {
                                        this.onSubmit();
                                    }} />
                            </View>
                            <Text style={styles.versionNumber}>{APP_VERSION}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    versionNumber: {
        fontSize: 16,
        color: '#CCC',
        marginBottom: 8
    },
    title: {
        fontSize: 28,
        color: "red",
        marginBottom: 16
    },
    inner: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 32,
        width: '100%',
        flex: 1,
        justifyContent: "center",
    },
    buttonContaniner: {
        paddingHorizontal: 8,
        flexGrow: 0,
        alignSelf: 'stretch'
    },
    welcomeImage: {
        width: 300,
        height: 150
    },
    button: {
        height: 50,
        marginHorizontal: 0,
        marginVertical: 30,
        backgroundColor: "red"
    },
    buttonTitle: {
        fontSize: 22,
    }

});

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { user, loading } = authUser;
    return { user, loading }
}

export default connect(mapStateToProps, {
    signinUser,
})(SignInScreen);
