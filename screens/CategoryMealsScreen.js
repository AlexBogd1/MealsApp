import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {CATEGORIES} from "../data/data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title={'Go to Details'} onPress={() => {
                props.navigation.navigate('MealDetail');
            }}/>
            <Button title={'Go to Back'} onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;
