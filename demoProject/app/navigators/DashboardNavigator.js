/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import NewItemForm from "../screens/Forms/NewItemForm";
import {StackNavigator} from 'react-navigation';
import NewItemGroupForm from "../screens/Forms/NewItemGroupForm";
import ItemsListScreen from "../screens/ItemsListScreen";
import DashboardScreen from "../screens/DashboardScreen";
import EditItemForm from "../screens/Forms/EditItemForm";

export default DashboardNavigator = StackNavigator({
		DashboardScreen: {screen: DashboardScreen },
		NewItemForm: {screen: NewItemForm},
		NewGroupForm: {screen: NewItemGroupForm},
		ItemsListScreen: {screen: ItemsListScreen},
		EditItemForm: {screen: EditItemForm}
	}, {
		initialRouteName: 'DashboardScreen',
		transitionConfig: () => ({
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const translateX = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [layout.initWidth, 0, 0]
				});

				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
					outputRange: [0, 1, 1, 0.3, 0]
				});

				return { opacity, transform: [{ translateX }] }
			}
		})
	}
);

