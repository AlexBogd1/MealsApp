import React from "react";

import {CATEGORIES, MEALS} from "../data/data";

import MealsList from "../components/MealsList";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealsList listData={selectedMeals} navigation={props.navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsScreen;
