import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Platform} from "react-native";
import {CATEGORIES} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile'
import Colors from '../constants/Colors';

const CategoriesScreen = (props) => {
    const renderedGridIem = (renderItem) => {
        return (
            <CategoryGridTile
                title={renderItem.item.title}
                color = {renderItem.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: renderItem.item.id,
                        }
                    });
                }}/>
        )
    }

    return (
        <FlatList data={CATEGORIES}
                  numColumns={2}
                  keyExtractor={(item, index) => item.id}
                  renderItem={renderedGridIem}/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;
