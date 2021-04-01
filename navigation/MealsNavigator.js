import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";
import {Platform} from "react-native";

import Colors from "../constants/Colors";

const MealsNavigation = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigation,
    Favorite: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);