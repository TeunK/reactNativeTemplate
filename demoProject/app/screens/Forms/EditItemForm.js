/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Image, Text, View, StyleSheet} from "react-native";
import editItemFormHeaderOptions from "../../config/navigationOptionHeaders/editItemFormHeaderOptions";
import {Card} from "react-native-elements";
import imageFiles from "../../domain/repository/imageFiles";

export default class NewItemGroupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: this.props.navigation.state.params.item
		}
	}

	static navigationOptions = editItemFormHeaderOptions;

	render() {
		return (
			<View>
				<View style={{display:"flex"}}>
					<Card
						image={{uri: imageFiles.pathToFile(this.state.selectedItem.image)}}
						>
						<Text>{this.state.selectedItem.name}</Text>
						<Text style={{marginBottom: 10}}>
							{this.state.selectedItem.category}
						</Text>

						<Button title="Edit" onPress={() => {alert("Lets edit this")}} buttonStyle={styles.button} />
					</Card>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: 36,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		marginTop:20,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});