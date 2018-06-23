/**
 * Created by Teun on 23-6-2018.
 */


import React from 'react';
import {FlatList} from "react-native";
import FlatListItem from "../flatListItem/FlatListItemComponent";

export default class MultiSelectList extends React.Component{

	state = {
		selected: (new Map())
	};

	_onPressItem = (id) => {
		const selected = new Map(this.state.selected);
		selected.set(id, !selected.get(id)); // toggle

		this.setState({selected: selected});

		if (this.props.onItemPressed) this.props.onItemPressed(id);
		if (this.props.updateSelectedItems) {
			this.props.updateSelectedItems(this.props.items
				.filter(item => selected._mapData
					.filter(item => item[1] === true)
					.map(item => item[0])
					.indexOf(item.index) >= 0));
		}
	};

	render() {
		return (
			<FlatList
				data={this.props.items}
				extraData={this.state}
				keyExtractor={(item, index) => item.item}
				renderItem={(item) => <FlatListItem
					id={item.item.index}
					onPressItem={this._onPressItem}
					selected={!!this.state.selected.get(item.item.index)}
					item={item.item}
				/>}
			/>
		);
	}
}