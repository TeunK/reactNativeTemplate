/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";

export default class NewItemForm extends React.Component {
	static navigationOptions = {
		title: 'Register New Item',
		headerStyle: {
			backgroundColor: '#212121'
		},
		headerTitleStyle: {
			color: '#FFF'
		}
	};
	render() {
		return (
			<View>
				<Text>register new item form</Text>
			</View>
		)
	}
}