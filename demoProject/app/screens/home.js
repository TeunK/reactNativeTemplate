import React from 'react';
import RealmSampleComponent from "../components/realmSampleComponent";

import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';


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
		super()
		this.state = {
			selectedIndex: 2
		}
		this.updateIndex = this.updateIndex.bind(this)
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}


	render() {
		const {navigate} = this.props.navigation;

		const buttons = ['Hello', 'World', 'Buttons']
		const { selectedIndex } = this.state

		return (
			<View style={styles.container}>

				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit App.js
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
				<RealmSampleComponent></RealmSampleComponent>

				<ButtonGroup
					onPress={this.updateIndex}
					selectedIndex={selectedIndex}
					buttons={buttons}
					containerStyle={{height: 20}}
				/>

				<View style={{height:40}}>
					<Button
						buttonStyle={{height:20}}
						backgroundColor="#012051"
						icon={{name: 'squirrel', type: 'octicon'}}
						title='Some button' />
				</View>


				<Button
					small
					rounded
					backgroundColor="#CCC"
					iconRight={{name: 'code'}}
					title='LARGE WITH RIGHT ICON' />

				<View style={{margin:10}}>
					<Button title='Dashboard' onPress={() => navigate('Dashboard', {})} margin={20}/>
				</View>

				<View style={{margin:10}}>
					<Button title='Profile' onPress={() => navigate('Profile', {})}/>
				</View>

				<View style={{margin:10}}>
					<Button title='Signin' onPress={() => navigate('Signin', {})}/>
				</View>

				<View style={{margin:10}}>
					<Button title='Items List' onPress={() => navigate('ItemsList', {})}/>
				</View>

			</View>
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
	}
});
