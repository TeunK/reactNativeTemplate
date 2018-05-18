/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";

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
		return (
			<View>
				<Text>dashboard</Text>
			</View>
		)
	}
}