import React from 'react';

import {
	Platform, ScrollView,
	StyleSheet,
} from 'react-native';
import TitleCardComponent from "../components/TitleCardComponent";
import {RegisteredItemsScrollerComponent} from "../components/RegisteredItemsComponent";
import {itemsList} from "../domain/repository/items";
import ListView from "realm/react-native/listview";
import imageFiles from "../domain/repository/imageFiles";
import {Text} from "react-native-elements";

export default class HomeScreen extends React.Component {
	constructor () {
		super();
		this.state = {
			selectedIndex: 2,
			imageFiles: []
		};
		this.updateIndex = this.updateIndex.bind(this);
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}

	openNewItemForm = () => {
		this.props.navigation.navigate('NewItemForm');
	};

	async componentDidMount() {
		await this.loadImages();
	}

	async componentDidUpdate() {
		await this.loadImages();
	}

	async loadImages() {
		const images = await imageFiles.getImages();
		this.setState({images: images});
	}

	render() {
		return (
			<ScrollView>

				<TitleCardComponent
					img={require('../files/images/deedee.jpg')}
					header="Home"
					content="This is where you can find the items you have recorded"
				/>

				{this.state.images && <Text>{JSON.stringify(this.state.images, null, 2)}</Text>}

				<RegisteredItemsScrollerComponent itemsList={itemsList} clickFunction={this.openNewItemForm}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList} clickFunction={() => {alert("hi")}}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList}/>
			</ScrollView>
		);
	}
}