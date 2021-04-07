import {MEALS} from "../../data/data";
import {TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                console.log(existingIndex);
                const updateFavMeals = [...state.favoriteMeals];
                updateFavMeals.splice(existingIndex,1)
                return {
                    ...state,
                    favoriteMeals: updateFavMeals,
                }
            } else {
                console.log(existingIndex);
                const newFavMeal = state.meals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(newFavMeal),
                }
            }

        default:
            return state;
    }
    return state;
};

export default mealsReducer;
