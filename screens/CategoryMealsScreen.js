import React from "react";
import {useSelector} from "react-redux";
import {CATEGORIES} from "../data/data";

import MealsList from "../components/MealsList";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const selectedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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
