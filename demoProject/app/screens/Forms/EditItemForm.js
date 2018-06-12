/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Image, Text, View, StyleSheet} from "react-native";
import editItemFormHeaderOptions from "../../config/navigationOptionHeaders/editItemFormHeaderOptions";
import {Card} from "react-native-elements";
import imageFiles from "../../domain/repository/imageFiles";
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'

class NewItemGroupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItem: this.props.navigation.state.params.item
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.navigation.state.params) {
			if (!this.props.isFocused && nextProps.isFocused) {
				this.setState({
					selectedItem: this.props.navigation.state.params.item
				});
			}
			if (this.props.isFocused && !nextProps.isFocused) {
			}
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

export default withNavigationFocus(NewItemGroupForm);

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