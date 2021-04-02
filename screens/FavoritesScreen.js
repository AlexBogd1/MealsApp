import React from "react";

import MealsList from "../components/MealsList";
import {MEALS} from "../data/data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2');
  return (
   <MealsList listData={favMeals} navigation={props.navigation}/>
  );
};


export default FavoritesScreen;
