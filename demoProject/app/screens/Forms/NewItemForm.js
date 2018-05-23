/**
 * Created by Teun on 16-5-2018.
 */
'use strict';

import React from 'react';
import t from 'tcomb-form-native';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, Button} from 'react-native';
import stylesheet from 'tcomb-form-native/lib/stylesheets/bootstrap';
import ImagePicker from 'react-native-image-picker';

const Form = t.form.Form;
t.form.Form.stylesheet = stylesheet;

// here we are: define your domain model
const Person = t.struct({
	name: t.String,              // a required string
	surname: t.maybe(t.String),  // an optional string
	age: t.Number,               // a required number
	rememberMe: t.Boolean        // a boolean
});

const options = {
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
				<Button title="Image" onPress={this.pickImage}/>
				<Image source={this.state.avatarSource} style={{width:50,height:50}} />

				<TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Save</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginTop: 50,
		padding: 20,
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
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});