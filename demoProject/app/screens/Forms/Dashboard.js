/**
 * Created by Teun on 22-5-2018.
 */

import React from 'react';
import {Button, Text, View} from "react-native";
import OptionsMenuComponent from "../../components/OptionsMenuComponent";
import {CardComponent} from "../../components/TitleCardComponent";


export default class Dashboard extends React.Component {
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

	optionsList = [
		{
			title: 'Add New Item',
			icon: 'add',
			clickFunction: () => {
				this.props.navigation.navigate('NewItemForm');
			}
		},
		{
			title: 'Add Item Group',
			icon: 'add',
			clickFunction: () => {
				this.props.navigation.navigate('NewGroupForm');
			}
		},
		{
			title: 'View All',
			icon: 'list',
			clickFunction: () => {
				this.props.navigation.navigate('ViewAll');
			}
		}
	];

	render() {
		const options = <OptionsMenuComponent menuItems={this.optionsList}/>;
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