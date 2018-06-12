/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import { Text, View} from "react-native";
import newItemsFormHeaderOptions from "../../config/navigationOptionHeaders/newItemsFormHeaderOptions";

export default class ItemsListScreen extends React.Component {
	static navigationOptions = newItemsFormHeaderOptions;
	render() {
		return (
			<View>
				<Text>this is my items list page</Text>
			</View>
		)
	}
}