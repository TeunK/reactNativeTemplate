/**
 * Created by Teun on 16-5-2018.
 */
'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, Picker, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import customFormStyle from '../../../config/formStyles'
import newItemsFormHeaderOptions from "../../../config/navigationOptionHeaders/newItemsFormHeaderOptions";
import {Badge, Button, FormInput, FormLabel, FormValidationMessage, Icon} from "react-native-elements";
import fileManager from "../../../lib/storage/fileManager";
import itemRepository from "../../../domain/repository/items";
import ItemsService from '../../../services/itemsService';
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'
import styles from "./styles";
import Autocomplete from "react-native-autocomplete-input";
import globalStyles from "../../../config/globalStyles";

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

class NewItemForm extends React.Component {
	static navigationOptions = newItemsFormHeaderOptions;

	constructor(props) {
		super(props);
		this.nameInputRef = React.createRef();

		let startState = emptyForm;

		if (this.props.navigation.state.params) {
			const options = this.props.navigation.state.params.options;
			if (options.hasOwnProperty("category"))
				startState.category = options.category;
		}

		this.state = {
			formData: startState,
			existingItemCategories: [],
			categoryInputString: ""
		};
	};

	componentDidMount() {
		this.getCategories()
			.then(() => {
				if (this.props.navigation.state.params.options.hasOwnProperty("category")) {
					this.selectCategory(this.props.navigation.state.params.options.hasOwnProperty("category"));
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	getCategories = async () => {
		const existingItemCategories = await ItemsService.getExistingCategories();
		this.setState((prevState) => ({...prevState, existingItemCategories: existingItemCategories}));
	};

	componentWillReceiveProps(nextProps) {
		if (this.props.navigation.state.params) {
			if (!this.props.isFocused && nextProps.isFocused) {
				const options = this.props.navigation.state.params.options;
				if (options.hasOwnProperty("category"))
					this.setState((prevState) => ({...prevState, formData: { ...prevState.formData, category : options.category}}));
			}
			if (this.props.isFocused && !nextProps.isFocused) {
				this.clearForm();
			}
		}
	}

	onPressSave = async () => {
		const data = this.state.formData;
		if (data) {
			try {
				if (data.category === "" && this.state.categoryInputString !== "")
				{
					alert(this.state.categoryInputString);
					data.category = this.state.categoryInputString;
				}

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
				alert(err);
			}
		} else {
			// validation failed
		}
	};

	clearForm = () => {
		this.nameInputRef.clearText();
		this.setState(prevState => ({...prevState, formData: emptyForm }));
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
				this.setState((prevState) => ({...prevState, formData: { ...prevState.formData, image: response }}));
			}
		});
	};

	updateName = (name) => {
		this.setState((prevState) => ({...prevState, formData: {...prevState.formData, name: name}}));
	};

	selectCategory = (value) => {
		let state = this.state;
		state.formData.category = value;
		this.setState(state);
	};

	render = () => {
		return (
			<View style={styles.container}>

				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.updateName} ref={element => this.nameInputRef = element}/>
				{this.state.formData.errors.name && <FormValidationMessage>Error message</FormValidationMessage>}

				<Picker
					style={globalStyles.mbm}
					selectedValue={this.state.formData.category}
					prompt="Item Category"
					onValueChange={this.selectCategory}>
					{this.state.existingItemCategories.map((categoryName, i) => <Picker.Item key={i} label={categoryName} value={categoryName}/>)}
				</Picker>

				<Button title="Add Image" onPress={this.pickImage} buttonStyle={styles.button}/>
				<Image source={this.state.formData.image} style={styles.previewImage} />

				<Button title="Save" onPress={this.onPressSave} buttonStyle={styles.button} />
			</View>
		);
	}
}

export default withNavigationFocus(NewItemForm);