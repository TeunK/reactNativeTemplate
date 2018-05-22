/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";
import {TitleCardComponent, CardComponent} from "../components/TitleCardComponent";
import OptionsMenuComponent from "../components/OptionsMenuComponent";
import Ionicons from 'react-native-vector-icons/Ionicons';

const OptionsNavigator = StackNavigator({
	Home: { screen: App },
	Chat: { screen: ChatScreen },
});

const list = [
	{
		title: 'Add New Item',
		icon: 'add'
	},
	{
		title: 'Add Item Group',
		icon: 'add'
	},
	{
		title: 'View All',
		icon: 'list'
	}
];

export default class DashboardScreen extends React.Component {
	static navigationOptions = {
		title: 'Dashboard',
		headerStyle: {
			backgroundColor: '#212121'
		},
		headerTitleStyle: {
			color: '#FFF'
		},
		headerTintColor: '#FFF'
	};

	render() {
		const options = <OptionsMenuComponent menuItems={list}/>;
		return (
			<View>
				<CardComponent
					header="Options"
					content={options}
				/>
			</View>
		)
	}
}