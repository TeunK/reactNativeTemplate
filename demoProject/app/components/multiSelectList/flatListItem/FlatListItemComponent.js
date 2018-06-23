/**
 * Created by Teun on 23-6-2018.
 */

import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Text from "react-native-elements/src/text/Text";
import globalStyles from "../../../config/globalStyles";

export default class FlatListItem extends React.PureComponent {
	_onPress = () => {
		this.props.onPressItem(this.props.item.index);
	};

	render() {
		const textColor = this.props.selected ? "red" : "black";
		return (
			<TouchableOpacity onPress={this._onPress}>
				<View style={[globalStyles.flex, globalStyles.flexDirectionColumn, {flex: 1}, globalStyles.bgWhite, globalStyles.mbxs, globalStyles.pm]}>
					<Text style={{ color: textColor }}>
						{this.props.item.item}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}