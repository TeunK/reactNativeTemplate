/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import { Text, View} from "react-native";

export default class ItemsListScreen extends React.Component {
	static navigationOptions = {
		title: 'Items List',
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
				<Text>this is my items list page</Text>
			</View>
		)
	}
}