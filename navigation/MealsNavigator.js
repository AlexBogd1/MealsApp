import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";
import {Platform} from "react-native";

import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigation = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultNavigationOptions
});

const FavoriteNavigation = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: 'Your Favorites',
        }
    },
    MealDetails: MealDetailScreen,
},{
    defaultNavigationOptions: defaultNavigationOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },

        }
    },
    Favorite: {
        screen: FavoriteNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
        }
    },
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }

    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
        },
    });

export default createAppContainer(MealsFavTabNavigator);