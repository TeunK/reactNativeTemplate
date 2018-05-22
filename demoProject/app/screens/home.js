import React from 'react';

import {
	Platform, ScrollView,
	StyleSheet,
} from 'react-native';
import { TitleCardComponent} from "../components/TitleCardComponent";
import {RegisteredItemsScrollerComponent} from "../components/RegisteredItemsComponent";


const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: '#212121'
		},
		headerTitleStyle: {
			color: '#FFF'
		}
	};

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


	itemsList = [
		{
			name: "purple crayons"
		},
		{
			name: "pillow"
		},
		{
			name: "planttub"
		},
		{
			name: "glass window"
		},
		{
			name: "windsor castle"
		},
		{
			name: "extra long name to see what happens when this thing gets cropped"
		}
	];

	bla = () => {
		alert("ok");
	};

	render() {
		const {navigate} = this.props.navigation;

		const buttons = ['Hello', 'World', 'Buttons'];
		const { selectedIndex } = this.state;

		return (
			<ScrollView>

				<TitleCardComponent
					img={require('../files/images/deedee.jpg')}
					header="Home"
					content="This is where you can find the items you have recorded"
				/>

				<RegisteredItemsScrollerComponent itemsList={this.itemsList} clickFunction={this.bla}/>
				<RegisteredItemsScrollerComponent itemsList={this.itemsList}/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	smallTile: {
		width:20,
		height:20
	}
});
