/**
 * Created by Teun on 16-5-2018.
 */
'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, Picker} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import customFormStyle from '../../config/formStyles'
import newItemsFormHeaderOptions from "../../config/navigationOptionHeaders/newItemsFormHeaderOptions";
import {Button, FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import fileManager from "../../lib/storage/fileManager";
import itemRepository from "../../domain/repository/items";



const options = {
	stylesheet: customFormStyle,
	auto: 'placeholders',
	fields: {
		name: {
			error: 'This field is required'
		},
		category: {
			help: "category"
		}
	}
};

const imgoptions = {
	title: 'Select Avatar',
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};

const emptyForm = {
	name: "",
	category: "",
	image: {},
	errors: {}
};

const categories = ["Select Category...","Lipsticks", "Rental Cars", "Computers", "Cakes", "Chairs", "Dresses", "Suits"];

export default class NewItemForm extends React.Component {
	static navigationOptions = newItemsFormHeaderOptions;

	constructor(props) {
		super(props);
		this.state = {
			formData: emptyForm
		};
		this.nameInputRef = React.createRef();
	};

	onPress = async () => {
		const data = this.state.formData;
		if (data) {
			try {
				const imageUri = await fileManager.writeToMemory(data.image);
				if (imageUri) {
					const itemDetails = {
						name: data.name,
						category: data.category,
						image: imageUri
					};
					itemRepository.saveItem(itemDetails);
					this.clearForm();
				} else {
					alert("Could not find imageName or imageDataString on image object");
				}
			} catch (err) {
				alert("Err: "+err);
			}
		} else {
			// validation failed
		}
	};

	clearForm = () => {
		this.nameInputRef.clearText();
		this.setState({ formData: emptyForm });
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
			else {

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState((prevState) => ({...prevState, formData: { ...prevState.formData, image: response }}));
			}
		});
	};

	updateName = (name) => {
		this.setState((prevState) => ({...prevState, formData: {...prevState.formData, name: name}}));
	};

	selectCategory = (itemValue, itemIndex) => {
		this.setState((prevState) => ({...prevState, formData: {...prevState.formData,category:itemValue}}))
	};

	render = () => {
		return (
			<View style={styles.container}>

				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.updateName} ref={element => this.nameInputRef = element}/>
				{this.state.formData.errors.name && <FormValidationMessage>Error message</FormValidationMessage>}

				<Picker
					selectedValue={this.state.formData.category}
					prompt="Item Category"
					onValueChange={this.selectCategory}>
					{categories && categories.length > 0 && categories.map((category, i) =>
						<Picker.Item key={i} label={category} value={category}/>
					)}
				</Picker>

				<Button title="Add Image" onPress={this.pickImage} buttonStyle={styles.button}/>
				<Image source={this.state.formData.image} style={styles.previewImage} />

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
	},
	previewImage: {
		width:250,
		height:250,
		justifyContent: 'center',
		alignSelf:'stretch',
		marginTop: 5,
		marginBottom: 5
	}
});