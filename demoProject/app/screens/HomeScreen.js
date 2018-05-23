import React from 'react';

import {
	Image,
	Platform, ScrollView,
	StyleSheet, View,
} from 'react-native';
import TitleCardComponent from "../components/TitleCardComponent";
import {RegisteredItemsScrollerComponent} from "../components/RegisteredItemsComponent";
import {itemsList} from "../domain/repository/items";
import ListView from "realm/react-native/listview";
import imageFiles from "../domain/repository/imageFiles";
import {Text} from "react-native-elements";
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'
import {ItemScrollerComponent} from "../components/ItemScrollerComponent";

class HomeScreen extends React.Component {
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

	openProfileScreen = () => {
		this.props.navigation.navigate('ProfileScreen')
	};

	async componentDidMount() {
		await this.loadImages();
	}


	componentWillReceiveProps(nextProps) {
		if (!this.props.isFocused && nextProps.isFocused) {
			try {
				const result = this.loadImages();
			} catch (err) {
				alert("ERR: "+err);
			}
		}
		if (this.props.isFocused && !nextProps.isFocused) {
			// navigated away
		}
	}

	async loadImages() {
		try {
			const imageFileNames = await imageFiles.getImages();
			const images = [];
			imageFileNames.map(fileName => {
				images.push({
					name: fileName,
					image: imageFiles.getImageFilePath(fileName)
				})
			});
			this.setState({images: images});
		} catch (e) {
			alert("ERR: "+e);
		}
	}

	render() {
		return (
			<ScrollView>

				<TitleCardComponent
					img={require('../files/images/deedee.jpg')}
					header="Home"
					content="This is where you can find the items you have recorded"
				/>

				{/*{this.state.images && <Text>{JSON.stringify(this.state.images, null, 2)}</Text>}*/}
				{/*{this.state.images && this.state.images.map((image, i) =>*/}
					{/*<View key={i}>*/}
						{/*<Text>{imageFiles.getImageFilePath(image)}</Text>*/}
						{/*<Image source={{uri: imageFiles.getImageFilePath(image)}} style={{height:200, width:200}}/>*/}
					{/*</View>*/}
				{/*)}*/}


				{this.state.images && <RegisteredItemsScrollerComponent itemsList={this.state.images} clickFunction={this.openNewItemForm}/>}
				<ItemScrollerComponent itemsList={itemsList}/>
				{/*<RegisteredItemsScrollerComponent itemsList={itemsList}/>*/}
				{/*<RegisteredItemsScrollerComponent itemsList={itemsList} clickFunction={() => {alert("hi")}}/>*/}
				{/*<RegisteredItemsScrollerComponent itemsList={itemsList}/>*/}
				{/*<RegisteredItemsScrollerComponent itemsList={itemsList}/>*/}
			</ScrollView>
		);
	}
}

export default withNavigationFocus(HomeScreen);