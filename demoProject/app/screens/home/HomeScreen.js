import React from 'react';

import {ScrollView, View} from 'react-native';
import TitleCardComponent from "../../components/titleCard/TitleCardComponent";
import {RegisteredItemsScrollerComponent} from "../../components/registeredItems/RegisteredItemsComponent";
import itemRepository from "../../domain/repository/items";
import ListView from "realm/react-native/listview";
import imageFiles from "../../domain/repository/imageFiles";
import {Text} from "react-native-elements";
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'
import {ItemScrollerComponent} from "../../components/itemScroller/ItemScrollerComponent";

class HomeScreen extends React.Component {
	constructor () {
		super();
		this.state = {
			selectedIndex: 2,
			imageFiles: [],
			items: [],
			categorisedItems: {}
		};
		this.updateIndex = this.updateIndex.bind(this);
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}

	openNewItemForm = (category) => {
		this.props.navigation.navigate('NewItemForm', {options: {category: category}});
	};

	selectItem = (item) => {
		this.props.navigation.navigate('EditItemForm', {item: item});
	};

	openProfileScreen = () => {
		this.props.navigation.navigate('ProfileScreen')
	};

	async componentDidMount() {
		await this.loadImages();
		await this.loadItems();
	}

	loadItems = async () => {
		try {
			const items = await itemRepository.getAllItems();
			this.setState({items: items});
			this.setState({categorisedItems: this.getCategorisedItems(items)});
		} catch (err) {
			alert(err);
		}
	};

	getCategorisedItems = (items) => {
		let categorisedItems = {};
		for (let itemId in Object.keys(items)) {
			const item = items[itemId];
			if (categorisedItems.hasOwnProperty(item.category)) {
				categorisedItems[item.category].push(item);
			} else {
				categorisedItems[item.category] = [item];
			}
		}
		return categorisedItems;
	};

	componentWillReceiveProps(nextProps) {
		if (!this.props.isFocused && nextProps.isFocused) {
			try {
				const imagesFromDisk = this.loadImages();
				const itemsFromMemory = this.loadItems();
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
					img={require('../../files/images/deedee.jpg')}
					header="Home"
					content="This is where you can find the items you have recorded"
				/>

				{this.state.categorisedItems && Object.keys(this.state.categorisedItems).map((category, i) =>
						<RegisteredItemsScrollerComponent key={i} category={category} itemsList={this.state.categorisedItems[category]} clickItemFunction={this.selectItem} clickPanelFunction={this.openNewItemForm.bind(null, category)}/>
					)
				}

				{this.state.items && <View>
						<RegisteredItemsScrollerComponent category={"All recorded items"} itemsList={this.state.items} clickItemFunction={this.selectItem} clickPanelFunction={this.openNewItemForm}/>
					</View>
				}

				{this.state.images && <View>
						<RegisteredItemsScrollerComponent category={"All images, like.. evah"} itemsList={this.state.images}/>
					</View>
				}
			</ScrollView>
		);
	}
}

export default withNavigationFocus(HomeScreen);