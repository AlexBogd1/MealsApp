import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = (itemData) => {
        const goToNextPage = () => {
            props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    mealId: itemData.item.id,
                }
            });
        };
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={goToNextPage}
            />
        );
    }

    return (
        <FlatList
            data={selectedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
        />
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
