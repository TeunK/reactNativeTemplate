/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";
import newItemsFormHeaderOptions from "../../config/navigationOptionHeaders/newItemsFormHeaderOptions";

export default class NewItemForm extends React.Component {
	static navigationOptions = newItemsFormHeaderOptions;
	render() {
		return (
			<View>
				<Text>register new item form</Text>
			</View>
		)
	}
}