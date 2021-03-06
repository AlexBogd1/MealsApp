import React, {useCallback, useEffect} from "react";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {useSelector, useDispatch} from "react-redux";
import DefaultText from "../components/DefaultText";
import {toggleFavorite} from "../store/actions/meals";

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};


const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const currentMealsIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id ===mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId]);

    useEffect(() => {
        props.navigation.setParams({
            toggleFav: toggleFavoriteHandler,
        });
    }, [toggleFavoriteHandler]);



    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient =>
                <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step =>
                <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>

    );
};

MealDetailScreen.navigationOptions = navigationData => {
   // const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavoriteHandler = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    console.log(isFav);
    //const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: mealTitle.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Favorite'
                iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavoriteHandler}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },

    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
});

export default MealDetailScreen;
