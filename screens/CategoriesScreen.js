import React from "react";
import {StyleSheet, FlatList} from "react-native";
import {CATEGORIES} from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";


const CategoriesScreen = (props) => {
    const renderedGridIem = (renderItem) => {
        return (
            <CategoryGridTile
                title={renderItem.item.title}
                color={renderItem.item.color}
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

CategoriesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    }


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
