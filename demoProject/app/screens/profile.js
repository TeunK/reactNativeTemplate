/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";

export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Profile',
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
				<Text>profile</Text>
			</View>
		)
	}
}