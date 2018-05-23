/**
 * Created by Teun on 16-5-2018.
 */
'use strict';

import React from 'react';
import t from 'tcomb-form-native';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import stylesheet from 'tcomb-form-native/lib/stylesheets/bootstrap';

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

export default class NewItemForm extends React.Component {

	constructor(props) {
		super(props);
		this.getValues = this.getValues.bind(this)
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

	render = () => {
		return (
			<View style={styles.container}>
				{/* display */}
				<Form
					ref="form"
					type={Person}
					options={options}
				/>
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