import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, post, put } from "../api/client";
import { alimento, useEjercicios } from '../state/State';

export default function SearchFoodScreen({ route, navigation, ejercicio }) {

    const [name, setName] = React.useState("Nombre del entrenamiento");
    const [alimentoGlobal, setAlimentoGlobal] = alimento();
    const [listaAlimentos, setListaAlimentos] = React.useState([]);
    const [lastId, setLastId] = React.useState();
    const { item } = route.params;

    const changeName = (nombre) => {
        setName(nombre);
    }

    React.useEffect(() => {
        getAlimentos();
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableHighlight
              onPress={() => {navigation.navigate("CreateFood")}}>
              <Ionicons name="settings-sharp" color="white" size={25}/>
            </TouchableHighlight>
          ),
        });
      }, [navigation]);

    const getAlimentos = async () => {
        try {
            const data = await get(`alimentos/`);
            setListaAlimentos(data);
        } catch (error) {
            console.log("Error al buscar alimentos" + error)
        }
    }

    const updateComida = async (alimentoId, comidaId) => {
        try {
            const data = await put(`comidas/${comidaId}?alimentoId=${alimentoId}` );
            
        } catch (error) {
            console.log("Error al buscar alimentos" + error)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.header]}>
                    <TextInput style={styles.userName} placeholder="Busca un alimento" placeholderTextColor="white" onChangeText={newText => changeName(newText)} />
                    <TouchableHighlight underlayColor='#102739' style={[styles.saveButton]} /* onPress={() => postEntrenamientoEjercicio()} */>
                        <Text style={styles.text}>Buscar</Text>
                    </TouchableHighlight>
                </View>
                {listaAlimentos && listaAlimentos.map((alimento, index) => {
                    return (
                        <TouchableHighlight style={[styles.elemento]} key={index} onPress={() => {updateComida(alimento.id, item.id); navigation.navigate("FoodScreen")}} >
                            <View style={styles.userName} >
                                <Text style={styles.text}>{alimento.nombre}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    //#f4364c

    saveButton: {
        backgroundColor: '#102739',
        marginRight: 10,
        padding: 5,
        borderRadius: 5,

    },
    titles: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        height: 30,
    },
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
        height: 50,
        width: "95%",
        //position: 'absolute',
        left: 10,
        right: 10,
        top: 0,
        backgroundColor: '#625fd4',
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
    },
    elemento: {
        height: 50,
        width: "95%",
        left: 10,
        right: 10,
        top: 0,
        backgroundColor: '#102739',
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 5
    },
    addExerciseButton: {
        height: 50,
        width: "95%",
        backgroundColor: '#625fd4',
        zIndex: 10,
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginLeft: 10,
    },
    content: {
        alignItems: 'center',
        marginTop: 60,
    },
    box: {
        width: "95%",
        minHeight: 200,
        backgroundColor: '#102739',
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#102739'
    },

    titleContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        height: 30,
    },
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: -1
    },
    titleText: {
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 10
    },
    userName: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 10,
    },
    progressCircle: {
        color: 'white',
        backgroundColor: '#102739',
        height: 90,
        width: 90,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#625fd4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
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