import React from "react";
import {useSelector} from "react-redux";
import MealsList from "../components/MealsList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

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
