/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";
import {TitleCardComponent, CardComponent} from "../components/TitleCardComponent";
import OptionsMenuComponent from "../components/OptionsMenuComponent";
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewItemForm from "./Forms/NewItemForm";
import {StackNavigator} from 'react-navigation';
import NewItemGroupForm from "./Forms/NewItemGroupForm";
import ItemsList from "./itemsList";
import Dashboard from "./Forms/Dashboard";

export default DashboardScreen = StackNavigator({
		Dashboard: {screen: Dashboard },
		NewItemForm: {screen: NewItemForm},
		NewGroupForm: {screen: NewItemGroupForm},
		ViewAll: {screen: ItemsList},
	}, {
		initialRouteName: 'Dashboard',
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

