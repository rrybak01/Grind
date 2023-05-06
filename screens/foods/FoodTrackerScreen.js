import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Pressable  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, post, deleteMethod } from "../../api/client";

export default function FoodTrackerScreen({ navigation }) {

    const alimento = {
        "nombre": "Helado",
        "calorias": "121",
        "hidratos": 14,
        "proteinas": 21,
        "grasas": 9
    };

    const [comidas, setComidas] = React.useState([]);
    const [caloriasObjetivo, setCaloriasObjetivo] = React.useState(0);
    const [caloriasConsumidas, setCaloriasConsumidas] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    //const [userId, setUserId] = userIdAux();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableHighlight
                    onPress={() => { navigation.navigate("CreateFood") }}>
                    <Ionicons name="settings-sharp" color="white" size={25} />
                </TouchableHighlight>
            ),
        });

        const focusHandler = navigation.addListener('focus', () => {
            getComidas()
        });

        return focusHandler;

    }, [navigation]);

    React.useEffect(() => {

        getComidas();

    }, []);

    const getComidas = async () => {
        try {
            /*if (userId !== undefined) {
                const data = await get(`comidas/${userId}`);
                setComidas(data);
            }*/
            setLoading(true)
        } catch (error) {
            console.log("Error al cargar las comidas: " + error);
        }
    }

    {
        if (loading) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <View style={[styles.header]}>
                            <Text style={styles.caloriesText}>Calorías restantes</Text>
                            <View style={[styles.textContainer]}>
                                <Text style={[styles.text, styles.caloriesNumber]}>{caloriasObjetivo}</Text>
                                <Text style={[styles.text]}>Objetivo</Text>
                            </View>
                            <Text style={[styles.text]}>-</Text>
                            <View style={[styles.textContainer]}>
                                <Text style={[styles.text, styles.caloriesNumber]}>{caloriasConsumidas}</Text>
                                <Text style={[styles.text]}>Alimento</Text>
                            </View>
                            <Text style={[styles.text]}>=</Text>
                            <View style={[styles.textContainer]}>
                                <Text style={[styles.text, styles.caloriesNumber]}>{caloriasObjetivo - caloriasConsumidas}</Text>
                                <Text style={[styles.text]}>Restantes</Text>
                            </View>
                        </View>
                        <View style={[styles.content]}>
                            {comidas && comidas.map((item, index) => {
                                return (
                                    <View style={[styles.box]} key={index}>
                                        <View style={styles.foodNameContainer}>
                                            <Text style={styles.foodText}>{item.nombre}</Text>
                                        </View>
                                        <View>
                                            {item.alimento && item.alimento?.map((item, index2) => {
                                                { prueba(parseInt(item.calorias)) }
                                                return (
                                                    <Pressable style={styles.foodNameContainer2} key={index2}>
                                                        <Text style={styles.foodText}>{item.nombre}</Text>
                                                        <Text style={styles.totalMealCalories}>{item.calorias}</Text>
                                                    </Pressable>
                                                )
                                            })}
                                        </View>
                                        <View style={styles.añadirAlimentoContainer}>
                                            <Text style={styles.añadirAlimento} onPress={() => navigation.navigate("AddFood", { item })}>AÑADIR ALIMENTO</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
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
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        alignItems: 'center',
        marginTop: 110,
    },
    box: {
        width: "95%",
        minHeight: 100,
        backgroundColor: '#102739',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    caloriesText: {
        position: 'absolute',
        left: 20,
        top: 5,
        color: 'white',
        fontSize: 14
    },
    caloriesNumber: {
        fontSize: 16

    },
    textContainer: {
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 12
    },
    foodNameContainer: {
        minHeight: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    foodNameContainer2: {
        minHeight: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    foodText: {
        color: 'white',
    },
    totalMealCalories: {
        color: 'white',
        position: 'absolute',
        right: 0
    },
    añadirAlimentoContainer: {
        minHeight: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderTopColor: 'grey',
        borderTopWidth: 1,

    },
    añadirAlimento: {
        color: 'white'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      //margin: 20,
      width: "95%",
      height: 200,
  
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 5,
      //padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2
    },
    modalButton: {
      backgroundColor: '#625fd4',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
});

