/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import { Text, View} from "react-native";

export default class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Signin',
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
				<Text>signin</Text>
			</View>
		)
	}
}