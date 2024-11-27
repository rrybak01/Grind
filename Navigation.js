import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutsScreen";

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStackNavigator = createNativeStackNavigator();
function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#102739',
                },
            }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const WorkoutStackNavigator = createNativeStackNavigator();
function WorkoutStack() {
    return (
        <WorkoutStackNavigator.Navigator
            initialRouteName="WorkoutScreen"
            screenOptions={{
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#102739',
                },
            }}
        >
            <WorkoutStackNavigator.Screen
                name="WorkoutScreen"
                component={WorkoutScreen}
                options={{
                    title: 'Entrenamientos',
                }}

            />
        </WorkoutStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#102739',
                    height: 75,
                    padding: 10,
                    paddingBottom: 20
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
            <Tab.Screen name="Workouts" component={WorkoutStack}></Tab.Screen>
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
