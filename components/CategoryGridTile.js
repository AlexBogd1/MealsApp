import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback} from "react-native";


const CategoryGridTile = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.03,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    }
});

export default CategoryGridTile;