import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Modal, Pressable, TouchableHighlight } from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import { get, post, put } from "../api/client";

export default function HomeScreen({ navigation }) {

  const [usuario, setUsuario] = React.useState({});
  const [nombre, setNombre] = React.useState();
  const [nameModal, setNameModal] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [emailModal, setEmailModal] = React.useState(false);
  const [contraseña, setContraseña] = React.useState();
  const [contraseñaModal, setContraseñaModal] = React.useState(false);
  const [peso, setPeso] = React.useState();
  const [pesoModal, setPesoModal] = React.useState(false);
  const [calorias, setCalorias] = React.useState();
  const [caloriasModal, setCaloriasModal] = React.useState(false);
  const [benchPress, setBenchPress] = React.useState();
  const [benchModal, setBenchModal] = React.useState(false);
  const [squat, setSquat] = React.useState();
  const [squatModal, setSquatModal] = React.useState(false);
  const [deadlift, setDeadlift] = React.useState();
  const [deadliftModal, setDeadliftModal] = React.useState(false);
  const [sesionModal, setSesionModal] = React.useState(false);

  /*const getUsuario = async () => {
    try {
      if (userId !== undefined) {
        const data = await get(`usuarios/${userId}`)
        setUsuario(data);
        setCaloriasObjetivo(data.calorias)
      }
    } catch (error) {
      console.log("Error al cargar los usuarios: " + error);
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          onPress={() => {setSesionModal(true)}}>
          <Ionicons name="settings-sharp" color="white" size={25}/>
        </TouchableHighlight>
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    //getUsuario();
    postComidas();
  }, []);

  const updateUsuario = async () => {
    try {
      const payload = {
        nombre: nombre,
        email: email,
        contraseña: contraseña,
        peso: peso,
        calorias: calorias,
        benchpress: benchPress,
        squat: squat,
        deadlift: deadlift
      }
      if (userId !== undefined) {
        const data = await put(`usuarios/${userId}`, payload);

        setNombre();
        setEmail();
        setContraseña();
        setBenchPress();
        setSquat();
        setDeadlift();
        setPeso();
        setCalorias();

      }

    } catch (error) {
      console.log("Error al cambiar benchPress" + error)
    }
  }

  const postComidas = async () => {
    try {
      const comidas = [
        {
          "nombre": "Desayuno",
          "idUsuario": 1
        },
        {
          "nombre": "Almuerzo",
          "idUsuario": 1
        },
        {
          "nombre": "Cena",
          "idUsuario": 1
        },
        {
          "nombre": "Aperitivos",
          "idUsuario": 1
        }
      ]
      if (userId) {
        const data = await post(`comidas/${userId}`, comidas);
      }
    } catch (error) {
      console.log("Error al subir las comidas: " + error);
    }
  }*/

  /*React.useEffect(() => {

    getUsuario()

  }, [benchModal, squatModal, deadliftModal, pesoModal, caloriasModal, nameModal])*/

  return (
    <View style={styles.container}>      
      <Modal
        animationType="fade"
        transparent={true}
        visible={nameModal}
        onRequestClose={() => { setNameModal(!nameModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nombre" placeholderTextColor="black" onChangeText={value => setNombre(value)} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setNameModal(!nameModal); updateUsuario(); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={benchModal}
        onRequestClose={() => { setBenchModal(!benchModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black" onChangeText={value => setBenchPress(value)} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setBenchModal(!benchModal); updateUsuario(); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={squatModal}
        onRequestClose={() => { setSquatModal(!squatModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black" onChangeText={value => { setSquat(value);}} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setSquatModal(!squatModal); updateUsuario(); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={deadliftModal}
        onRequestClose={() => { setDeadliftModal(!deadliftModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black" onChangeText={value => setDeadlift(value)} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setDeadliftModal(!deadliftModal); updateUsuario(); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={pesoModal}
        onRequestClose={() => { setPesoModal(!pesoModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black" onChangeText={value => setPeso(value)} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setPesoModal(!pesoModal); updateUsuario(); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={caloriasModal}
        onRequestClose={() => { setCaloriasModal(!caloriasModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder="Nueva meta" placeholderTextColor="black" onChangeText={value => setCalorias(value)} />
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => { setCaloriasModal(!caloriasModal); }}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={sesionModal}
        onRequestClose={() => { setSesionModal(!sesionModal); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.modalButton]}
              onPress={() => {setSesionModal(!sesionModal); setIsLogged(false);}}
            >
              <Text style={styles.textStyle}>Cerrar sesión</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header]}>
          {/*<Ionicons style={styles.userContainer} onPress={() => navigation.navigate("Stack")} name="person-circle-sharp" color="white" size={70} />*/}
          <Text style={styles.userName} onPress={() => setNameModal(true)}>{usuario.nombre}</Text>
        </View>
        <View style={[styles.content]}>
          <View style={[styles.box, styles.box1]}>
            <View style={[styles.strenghtProgressContainer]}  >
              <View style={[styles.progressCircle]}><Text style={[styles.text]} onPress={() => setBenchModal(true)}>{usuario.benchpress} kg</Text></View>
              <Text style={[styles.text]}>Bench Press</Text>
            </View>
            <View style={[styles.strenghtProgressContainer]}>
              <View style={[styles.progressCircle]}><Text style={[styles.text]} onPress={() => setSquatModal(true)}>{usuario.squat} kg</Text></View>
              <Text style={[styles.text]}>Squat</Text>
            </View>
            <View style={[styles.strenghtProgressContainer]}>
              <View style={[styles.progressCircle]}><Text style={[styles.text]} onPress={() => setDeadliftModal(true)}>{usuario.deadlift} kg</Text></View>
              <Text style={[styles.text]}>Deadlift</Text>
            </View>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={[styles.boldText]}>Objetivos</Text>
            <Text />
            <Text style={[styles.smallText]}>Peso</Text>
            <Text style={[styles.text]} onPress={() => setPesoModal(true)}>{usuario.peso} kg</Text>
            <Text />
            <Text style={[styles.smallText]}>Calorías diarias</Text>
            <Text style={[styles.text]} onPress={() => setCaloriasModal(true)}>{usuario.calorias} cal</Text>
          </View>
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
    marginTop: 110,
  },
  box: {
    width: "95%",
    minHeight: 200,
    backgroundColor: '#333',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#102739'
  },
  box2: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#102739'
  },
  userContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginBottom: 5,
  },
  userName: {
    color: 'white',
    fontSize: 18,
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
    fontWeight: "bold",
  }
});