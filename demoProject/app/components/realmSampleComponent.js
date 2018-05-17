
import React, { Component } from 'react';
// import Realm from 'realm';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
// import {ItemSchema} from "../domain/itemSchema";
// import LocalDataStorage from "../lib/storage/datastorage";

export default class RealmSampleComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sampleValues: []
		};
	}
	//
	// async refresh() {
	// 	const randomItems = await LocalDataStorage.get(ItemSchema);
	// }
	//
	// async addItem() {
	// 	const sampleItem = {
	// 		name: 'SomeItem',
	// 		dateAdded: new Date(),
	// 		pictures: []
	// 	};
	// 	await LocalDataStorage.save(ItemSchema, sampleItem);
	// 	this.setState({sampleValues: randomItems});
	// }
	//
	// async wipe() {
	// 	await LocalDataStorage.wipe(ItemSchema);
	// 	this.setState({sampleValues: []});
	// }

	render() {
		const itemsList = this.state.sampleValues.map((item,id) => {
			return <Text key={id}>{item.dateAdded.toTimeString()+'\n'}</Text>
		});

		return (
			<View>
				<Text>
					{this.state.sampleValues ? <Text>Stored {this.state.sampleValues.length} items {'\n'}</Text> : 'Loading...'}
					{this.state.sampleValues ? itemsList : 'Loading...'}
				</Text>
			</View>
		);
	}
}