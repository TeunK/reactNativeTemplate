import React from 'react';

import {
	Platform, ScrollView,
	StyleSheet,
} from 'react-native';
import TitleCardComponent from "../components/TitleCardComponent";
import {RegisteredItemsScrollerComponent} from "../components/RegisteredItemsComponent";
import {itemsList} from "../domain/repository/items";

export default class HomeScreen extends React.Component {
	constructor () {
		super();
		this.state = {
			selectedIndex: 2
		};
		this.updateIndex = this.updateIndex.bind(this)
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}

	openNewItemForm = () => {
		this.props.navigation.navigate('NewItemForm');
	};

	render() {
		return (
			<ScrollView>

				<TitleCardComponent
					img={require('../files/images/deedee.jpg')}
					header="Home"
					content="This is where you can find the items you have recorded"
				/>

				<RegisteredItemsScrollerComponent itemsList={itemsList} clickFunction={this.openNewItemForm}/>
				<RegisteredItemsScrollerComponent itemsList={itemsList}/>
			</ScrollView>
		);
	}
}