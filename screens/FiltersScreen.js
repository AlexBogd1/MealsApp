import React, {useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet, Switch, Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{
                    true: Colors.primaryColor,
                    false: '#999797',
                }}
                thumbColor={Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor}
                value={props.value}
                onValueChange={props.onChange}/>
        </View>
    )
}

const FiltersScreen = props => {
    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);

    const saveFilters =useCallback( () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: vegan,
            vegetarian: vegetarian,
        };
        console.log(appliedFilters);
    },[isGlutenFree,isLactoseFree,vegan,vegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label='Gluten-free'
                value={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label='Lactose-free'
                value={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label='Vegan'
                value={vegan}
                onChange={newValue => setVegan(newValue)}
            />
            <FilterSwitch
                label='Vegetarian'
                value={vegetarian}
                onChange={newValue => setVegetarian(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters Screen',
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Save'
                iconName='ios-save'
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        margin: 20,
        textAlign: 'center',
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
    }
});

export default FiltersScreen;
