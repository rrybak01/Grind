import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, post, put } from "../../api/client";

export default function NewTrainingScreen({ route, navigation }) {

    const [name, setName] = React.useState("Nombre del entrenamiento");
    const [ejercicios, setEjercicios] = React.useState([]);
    const [entrenamientoId, setEntrenamientoId] = React.useState();
    const [userId, setUserId] = React.useState(1);

    const postEntrenamiento = async () => {
        try {
            //const id = await get(`entrenamientos/lastid`);

            const data = await post(`entrenamientos/${userId}`);
            setEntrenamientoId(data)

        } catch (error) {
            console.log("Error al crear alimento" + error)
        }
    }

    React.useEffect(() => {
        postEntrenamiento();
    }, []);

    const putEntrenamiento = async () => {
        try {
            //const id = await get(`entrenamientos/lastid`);

            const data = await put(`entrenamientos/${userId}?name=${name}`);
            setEntrenamientoId(data)

        } catch (error) {
            console.log("Error al crear alimento" + error)
        }
    }

    const updateEntrenamiento = async () => {
        try {
            const data = await put(`entrenamientos/${entrenamientoId}?nombre=${name}` );
            
        } catch (error) {
            console.log("Error al buscar alimentos" + error)
        }
    }

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
            getEntrenamiento()
        });

        return focusHandler;

    }, [navigation, entrenamientoId]);

    const getEntrenamiento = async () => {
        try {
            const data = await get(`entrenamientos/${entrenamientoId}`)
            if (data.ejercicio) {
                setEjercicios(data.ejercicio)
            }
        } catch (error) {
            console.log("Error al recuperar entrenamiento" + error)

        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.header]}>
                    <TextInput style={styles.userName} placeholder="Nombre del entrenamiento" placeholderTextColor="white" onChangeText={newText => setName(newText)} />
                    <TouchableHighlight underlayColor='#102739' style={[styles.saveButton]} onPress={() => {updateEntrenamiento(); navigation.navigate("WorkoutScreen")}} >
                        <Text style={styles.text}>Terminar</Text>
                    </TouchableHighlight>
                </View>
                {ejercicios && ejercicios.map((item, index) => {
                    return (
                        <View style={[styles.content]} key={index}>
                            <View style={[styles.box]}>
                                <View style={styles.titleContainer}>
                                    <Text style={[styles.titleText]}>{item?.nombre}</Text>
                                   

                                </View>
                            </View>
                        </View>
                    )
                })}
                <TouchableHighlight underlayColor='#102739' style={[styles.addExerciseButton]} onPress={() => navigation.navigate("SearchExercise", { entrenamientoId })}>
                    <Text style={styles.userName}>Añadir ejercicio</Text>
                </TouchableHighlight>
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
        marginBottom: 10,
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
    },
    box: {
        width: "95%",
        minHeight: 40,
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