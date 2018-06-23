/**
 * Created by Teun on 23-6-2018.
 */

import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Text from "react-native-elements/src/text/Text";
import globalStyles, {colors} from "../../config/globalStyles";
import { Icon } from 'react-native-elements'
import FormInput from "react-native-elements/src/form/FormInput";

export default class EditableListItem extends React.Component {
	state = {
		editing: false,
		itemName: this.props.item.item
	};

	toggleEditing = () => {
		if (this.state.editing) {
			this.props.onEdited(this.state.itemName);
		}
		this.setState({editing: !this.state.editing})
	};

	updateName = (name) => {
		this.setState({itemName: name});
	};

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPressItem}>
				<View style={[globalStyles.flex, globalStyles.flexDirectionRow, globalStyles.h45]}>

					<View style={[{flex: 6}, globalStyles.flexVerticalCenter]}>
						{!this.state.editing
							? <Text style={[globalStyles.fs16, globalStyles.mlm]}>{this.state.itemName}</Text>
							: <FormInput value={this.state.itemName} onChangeText={this.updateName} style={[globalStyles.m0, globalStyles.p0]}/>
						}
					</View>

					<TouchableOpacity onPress={this.toggleEditing}>
						<View style={[{flex:2}, globalStyles.mrs]}>
							<Icon raised size={15} name={!this.state.editing ? "edit" : "check"} color={!this.state.editing ? colors.blue2 : colors.green2}/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={this.props.onDeleteItem}>
						<View style={[{flex:2}, globalStyles.mrs]}>
							<Icon raised size={15} name="delete" color={colors.blue2}/>
						</View>
					</TouchableOpacity>




				</View>
			</TouchableOpacity>
		);
	}
}