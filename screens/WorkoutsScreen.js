import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getWorkouts } from '../redux/actions/workouts';
import { useSelector } from 'react-redux';

function WorkoutsScreen({ navigation, getWorkouts }) {

  const loading = useSelector(state => state.workouts.loading); 
  const workouts = useSelector(state => state.workouts.workouts); 
  const [entrenamientos, setEntrenamientos] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState([]);
  const [deleteId, setDeleteId] = React.useState([]);

  useEffect(() => {
    getWorkouts();
  }, []);

  /*const getEntrenamientos = async () => {
    try {
      const data = await get(`entrenamientos/lista/${userId}`);
      setEntrenamientos(data);
    } catch (error) {
      console.log("Error al cargar los entrenamientos: " + error);
    }
  }

  const deleteEntrenamiento = async () => {
    try {
      await deleteMethod(`entrenamientos/${deleteId}`);
    } catch (error) {
      console.log("Error al cargar los entrenamientos: " + error);
    }
  }

  React.useEffect(() => {
    getEntrenamientos();
  }, [deleteModal]);

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
      getEntrenamientos()
    });

    return focusHandler;

  }, [navigation]);*/

  {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={deleteModal}
          onRequestClose={() => { setDeleteModal(!deleteModal); }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black">¿Quiere borrar el entrenamiento?</Text>
              <TouchableHighlight
                style={[styles.button, styles.modalButton]}
                onPress={() => { deleteEntrenamiento(); setDeleteModal(!deleteModal);  }}
              >
                <Text style={styles.textStyle}>Aceptar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.header]}>
            <TouchableHighlight style={[styles.botonEntrenamiento]} onPress={() => navigation.navigate("NewWorkout")}>
              <Text style={[styles.startTraining]}>Comenzar entrenamiento</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.content]}>
            {workouts && workouts.length > 0 && workouts.map((item, index) => {
              return (
                <View style={[styles.box]} key={index}>
                  <View style={styles.foodNameContainer}>
                    <Text style={styles.foodText}>{item.nombre}</Text>
                    <TouchableHighlight style={styles.totalMealCalories} onPress={() => {setDeleteId(item.id); setDeleteModal(true)}}>
                      <Ionicons name="trash-outline" color="white" size={20} />
                    </TouchableHighlight>
                  </View>
                  <View>
                    {item.ejercicio && item.ejercicio?.map((item, index2) => {
                      return (
                        <View style={styles.foodNameContainer2} key={index2}>
                          <Text style={styles.foodText}>{item.nombre}</Text>
                        </View>
                      )
                    })}
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
  },
  botonEntrenamiento: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: "100%",
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
  startTraining: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
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

const mapDispatchToProps = {
  getWorkouts,
};

export default connect(null, mapDispatchToProps)(WorkoutsScreen);