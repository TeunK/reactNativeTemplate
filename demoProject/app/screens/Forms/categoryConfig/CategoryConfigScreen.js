/**
 * Created by Teun on 21-6-2018.
 */

import React from 'react';
import ItemsService from "../../../services/itemsService";
import categoryConfigHeaderOptions from "../../../config/navigationOptionHeaders/categoryConfigHeaderOptions";
import MultiSelectList from "../../../components/multiSelectList/multiSelectList/MultiSelectListComponent";
import {View} from "react-native";
import FlatListItem from "../../../components/multiSelectList/flatListItem/FlatListItemComponent";
import ListItem from "../../../components/listItem/ListItemComponent";
import globalStyles from "../../../config/globalStyles";
import EditableListItem from "../../../components/editableListItem/editableListItemComponent";
import CategoryRepository from "../../../domain/repository/categories";

const initialState = {
	existingItemCategories: []
};

export default class CategoryConfigScreen extends React.Component {
	static navigationOptions = categoryConfigHeaderOptions;
	state = {
		existingItemCategories: []
	};


	componentDidMount() {
		this.getCategories()
			.catch(err => {
				console.log(err);
			})
	}

	getCategories = async () => {
		// const existingItemCategories = await CategoryRepository.getAllCategories();

		const existingItemCategories = await ItemsService.getExistingCategories();
		this.setState((prevState) => ({...prevState, existingItemCategories: existingItemCategories.map((item, i) => {
			return {item: item, index: i, key: i}
		})}));
	};

	render() {
		return (
			this.state.existingItemCategories.map((item, index) =>
			<View key={index} style={[globalStyles.flex, globalStyles.flexDirectionColumn, globalStyles.bgWhite, globalStyles.mbxs, globalStyles.pm]} >
				<EditableListItem
					onEdited={(newItemName) => {alert(newItemName)}}
					onDeleteItem={() => {alert("DELETE: "+item.item)}}
					style={{flex: 1}}
					item={item}
					onPressItem={() => {alert(JSON.stringify(item,null,2))}}
				/>
			</View>
			// <MultiSelectList items={this.state.existingItemCategories} updateSelectedItems={items => {} }/>
		))
	}

}

