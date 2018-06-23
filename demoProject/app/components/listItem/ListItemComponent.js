/**
 * Created by Teun on 23-6-2018.
 */

import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Text from "react-native-elements/src/text/Text";
import globalStyles from "../../config/globalStyles";

export default class ListItem extends React.PureComponent {
	render() {
		const textColor = this.props.selected ? "red" : "black";
		return (
			<TouchableOpacity onPress={this.props.onPressItem}>
				<View>
					<Text style={{ color: textColor }}>
						{this.props.item.item}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}