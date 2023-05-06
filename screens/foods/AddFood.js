
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableHighlight, TextInput, TouchableOpacity, Alert } from 'react-native';
import { get, post } from "../../api/client";

export default function AddFood({ navigation }) {

    const [nombre, setNombre] = React.useState('');
    const [calorias, setCalorias] = React.useState('');
    const [proteinas, setProteinas] = React.useState('');
    const [grasas, setGrasas] = React.useState('');
    const [hidratos, setHidratos] = React.useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View />
            ),
        });
    }, [navigation]);

    const postAlimento = async () => {
        try {
            let params = {"nombre": nombre, "calorias": calorias, "proteinas": proteinas, "grasas": grasas, "hidratos": hidratos};
            const data = await post(`alimentos/`, params);
        } catch (error) {
            console.log("Error al cargar los entrenamientos: " + error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.content]}>
                    <View style={[styles.box]}>
                        <Text style={[styles.text, styles.userText]}>Nombre del alimento</Text>
                        <TextInput style={[styles.userInput]} placeholderTextColor="black" onChangeText={(e) => setNombre(e)} />
                        <View style={[styles.inputContainer]}>
                            <Text style={[styles.text, styles.userText]}>Calorias</Text>
                            <TextInput style={[styles.input45]} placeholderTextColor="black"onChangeText={(e) => setCalorias(e)} />
                        </View>
                        <View style={[styles.inputContainer]}>
                            <Text style={[styles.text, styles.userText]}>Proteinas</Text>
                            <TextInput style={[styles.input50]} placeholderTextColor="black" onChangeText={(e) => setProteinas(e)} />
                        </View>
                        <View style={[styles.inputContainer]}>
                            <Text style={[styles.text, styles.userText]}>Grasas</Text>
                            <TextInput style={[styles.input45]} placeholderTextColor="black" onChangeText={(e) => setGrasas(e)} />
                        </View>
                        <View style={[styles.inputContainer]}>
                            <Text style={[styles.text, styles.userText]}>Hidratos</Text>
                            <TextInput style={[styles.input50]} placeholderTextColor="black" onChangeText={(e) => setHidratos(e)} />
                        </View>
                        
                    </View>
                    <TouchableHighlight underlayColor='#102739' style={[styles.loginButton]} onPress={() => {postAlimento(); navigation.goBack()}}>
                        <Text style={styles.text}>Guardar alimento</Text>
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
        flexDirection: "row",
        flexWrap: "wrap"
    },
    userText: {
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    userInput: {
        backgroundColor: "white",
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 5
    },
    inputContainer: {
        width: '50%',
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: "column",
        flexWrap: "wrap"
    },
    input45: {
        backgroundColor: "white",
        width: '95%',
        height: 40,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: "column",
        flexWrap: "wrap",

    },
    input50: {
        backgroundColor: "white",
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: "column",
        flexWrap: "wrap",

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