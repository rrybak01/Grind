
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { get, post } from "../../api/client";

export default function Register({ navigation }) {

    const [usuarios, setUsuarios] = React.useState([]);
    const [usuario, setUsuario] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');


    const getUsuarios = async () => {
        try {
            const data = await get(`usuarios/`);
            setUsuarios(data);
        } catch (error) {
            console.log("Error al cargar los entrenamientos: " + error);
        }
    }

    const postUsuario = async () => {
        try {
            let params = {"nombre": usuario, "email": email, "contraseña": contraseña};
            const data = await post(`usuarios/`, params);
        } catch (error) {
            console.log("Error al cargar los entrenamientos: " + error);
        }
    }

    React.useEffect(() => {
        getUsuarios();
    }, []);

    const register = () => {
        if (usuario !== "" && email !== "" && contraseña !== "") {
            postUsuario();
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.content]}>
                    <View style={[styles.box]}>
                        <Text style={[styles.text, styles.userText]}>Usuario</Text>
                        <TextInput style={[styles.userInput]} placeholderTextColor="black" onChangeText={usuario => setUsuario(usuario)} />
                        <Text style={[styles.text, styles.userText]}>Email</Text>
                        <TextInput style={[styles.userInput]} placeholderTextColor="black" onChangeText={email => setEmail(email)} />
                        <Text style={[styles.text, styles.userText]}>Contraseña</Text>
                        <TextInput style={[styles.userInput]} placeholderTextColor="black" onChangeText={contraseña => setContraseña(contraseña)} />
                    </View>
                    <TouchableHighlight underlayColor='#102739' style={[styles.loginButton]} onPress={() => {register(); navigation.goBack()}}>
                        <Text style={styles.text}>Registro</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#102739' style={[styles.text, styles.registerButton]} onPress={() => navigation.goBack()}>
                        <Text style={styles.text}>Iniciar sesión</Text>
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
});