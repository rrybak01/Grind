import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
/*import WorkoutScreen from "./screens/WorkoutsScreen";
import NewTrainingScreen from "./screens/NewTrainingScreen";
import SearchExercise from "./screens/SearchExercise";
import AddExercise from "./screens/AddExercise";*/
/*import Login from "./screens/Login";
import Register from "./screens/Register";*/

import Ionicons from 'react-native-vector-icons/Ionicons';

//import { useSelector, useDispatch } from "react-redux";

/*const LoginStackNavigator = createNativeStackNavigator();
function LoginStack() {
    return (
        <LoginStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <LoginStackNavigator.Screen
                name="LoginScreen"
                component={Login}
                options={{
                    title: 'Inicio de sesión',
                }}
            />
            <LoginStackNavigator.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Registro',
                    headerBackVisible: false
                }}
            />
        </LoginStackNavigator.Navigator>
    )
}*/

const HomeStackNavigator = createNativeStackNavigator();
function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons onPress={() => alert('This is a button!')} name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            {/*<HomeStackNavigator.Screen
                name="Stack"
                component={NewTrainingScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                }}
            />*/}
        </HomeStackNavigator.Navigator>
    )
}

/*const WorkoutStackNavigator = createNativeStackNavigator();
function WorkoutStack() {
    return (
        <WorkoutStackNavigator.Navigator
            initialRouteName="WorkoutScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <WorkoutStackNavigator.Screen
                name="WorkoutScreen"
                component={WorkoutScreen}
                options={{
                    title: 'Entrenamientos',
                }}

            />
            <WorkoutStackNavigator.Screen
                name="NewWorkout"
                component={NewTrainingScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                    title: 'Nuevo entrenamiento',
                }}
            />
            <WorkoutStackNavigator.Screen
                name="SearchExercise"
                component={SearchExercise}
                options={{
                    headerBackButtonMenuEnabled: true,
                    title: 'Buscar ejercicio',
                }}
            />
            <WorkoutStackNavigator.Screen
                name="AddExercise"
                component={AddExercise}
                options={{
                    headerBackButtonMenuEnabled: true,
                    title: 'Añadir ejercicio',
                }}
            />
        </WorkoutStackNavigator.Navigator>
    )
}*/

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#102739',
                    height: 65,
                    padding: 10,
                    paddingBottom: 10
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === "Home") {
                        iconName = focused ? 'person' : 'person-outline';

                    } else if (rn === "Workouts") {
                        iconName = focused ? 'trophy' : 'trophy-outline';

                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack}></Tab.Screen>
            {/*<Tab.Screen name="Workouts" component={WorkoutStack}></Tab.Screen>*/}
        </Tab.Navigator>
    )
}

export default function Navigation() {

    //const login = useSelector((state) => state.auth.login);

    return (
        
        <NavigationContainer>
            {/*login ? <MyTabs /> : <LoginStack />*/}
            <MyTabs />
        </NavigationContainer>
    )

}
