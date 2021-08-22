import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import RoutineCard from "../components/RoutineCard";

export default function Home() {

    const routine = [
        "Chest and Back",
        "Biceps and Triceps",
        "Legs and Abs",
        "Chest and Triceps",
        "Back and Biceps",
        "Legs and Shoulders"
    ]

    const itemRoutine = ({item,index})=>(
        <TouchableOpacity>
            <RoutineCard text={item}/>
        </TouchableOpacity>

    )

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={(item,index)=>index.toString()} data={routine} renderItem={itemRoutine}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    list_container:{
        flex: 1,

    }
});
