import React from "react";
import {useSelector} from "react-redux";
import MealsList from "../components/MealsList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {Text, View, StyleSheet} from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0) {
        return <View style={styles.content}>
            <DefaultText>No favorite Meals Found. Start adding some!</DefaultText>
        </View>
    }
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
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default FavoritesScreen;
