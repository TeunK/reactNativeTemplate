/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View} from "react-native";
import newItemGroupFormHeaderOptions from "../../../config/navigationOptionHeaders/newItemGroupFormHeaderOptions";

export default class NewItemGroupForm extends React.Component {
	static navigationOptions = newItemGroupFormHeaderOptions;

	render() {
		return (
			<View>
				<Text>register new item GROUP form</Text>
			</View>
		)
	}
}