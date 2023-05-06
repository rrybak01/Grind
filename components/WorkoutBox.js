import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WorkoutsBox(props) {

    return (
        <View style={styles.box}>
            <View style={styles.titleContainer}>
                <Text style={[styles.titleText]}>{props.nombre}</Text>
                <Ionicons style={[styles.settingsButton]} onPress={() => alert('This is a button!')} name="ellipsis-vertical" color="white" size={20} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: -1
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
    titleContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        height: 30,
    },
    titleText: {
        color: 'white',
        paddingLeft: 15,
    },
    text: {
        color: 'white',
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