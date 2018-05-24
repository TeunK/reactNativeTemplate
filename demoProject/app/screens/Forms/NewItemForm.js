/**
 * Created by Teun on 16-5-2018.
 */
'use strict';

import React from 'react';
import t from 'tcomb-form-native';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import customFormStyle from '../../config/formStyles'
import newItemsFormHeaderOptions from "../../config/navigationOptionHeaders/newItemsFormHeaderOptions";
import {Button} from "react-native-elements";

const Form = t.form.Form;

// here we are: define your domain model
const Person = t.struct({
	name: t.String,              // a required string
	surname: t.maybe(t.String),  // an optional string
	age: t.Number,               // a required number
	rememberMe: t.Boolean        // a boolean
});

const options = {
	stylesheet: customFormStyle,
	auto: 'placeholders',
	fields: {
		name: {
			error: 'This field is required'
		}
	}
};

var imgoptions = {
	title: 'Select Avatar',
	customButtons: [
		{name: 'fb', title: 'Choose Photo from Facebook'},
	],
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};

export default class NewItemForm extends React.Component {
	static navigationOptions = newItemsFormHeaderOptions;

	constructor(props) {
		super(props);
		this.getValues = this.getValues.bind(this)
		this.state = {
			avatarSource: {}
		}
	}

	getValues = () => {
		return this.refs.form.getValue();
	};

	onPress = () => {
		const value = this.getValues();
		if (value) {
			alert(JSON.stringify(value));
			console.log(value); // value here is an instance of Person
			this.clearForm();
		} else {
			// validation failed
		}
	};

	clearForm = () => {
		this.setState({ value: null });
	};

	pickImage = () => {
		ImagePicker.showImagePicker(imgoptions, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source
				});
			}
		});
	};

	render = () => {
		return (
			<View style={styles.container}>
				{/* display */}
				<Form
					ref="form"
					type={Person}
					options={options}
				/>
				<Button title="Image" onPress={this.pickImage} buttonStyle={styles.button}/>
				<Image source={this.state.avatarSource} style={{width:250,height:250}} />

				<Button title="Save" onPress={this.onPress} buttonStyle={styles.button} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40,
		backgroundColor: '#ffffff',
	},
	title: {
		fontSize: 30,
		alignSelf: 'center',
		marginBottom: 30
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});