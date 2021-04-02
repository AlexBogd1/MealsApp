import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Text, Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import FiltersScreen from "../screens/FiltersScreen";

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
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
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals',
        }
    },
    Favorite: {
        screen: FavoriteNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals',
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
        labelStyle: {
            fontFamily: 'open-sans',
        }
    });

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {defaultNavigationOptions: defaultNavigationOptions});

const MainNavigator = createDrawerNavigator({
    MealFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',
        }
    },
    Filters: FilterNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 18,
        }
    }
})

export default createAppContainer(MainNavigator);