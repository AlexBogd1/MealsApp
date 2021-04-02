import React from "react";

import MealsList from "../components/MealsList";
import {MEALS} from "../data/data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2');
  return (
   <MealsList listData={favMeals} navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
      />
    </HeaderButtons>
  }
}


export default FavoritesScreen;
