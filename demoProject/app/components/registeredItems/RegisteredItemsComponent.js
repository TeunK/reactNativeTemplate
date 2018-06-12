/**
 * Created by Teun on 22-5-2018.
 */
import React from 'react';
import {
	Image,
	ScrollView, Text, TouchableOpacity,
	View
} from 'react-native';
import CardComponent from "../card/CardComponent";
import {Tile} from "react-native-elements";
import fileManager from "../../lib/storage/fileManager";
import imageFiles from "../../domain/repository/imageFiles";
import globalStyles from "../../config/globalStyles";

export class RegisteredItemsScrollerComponent extends React.Component {

	render() {
		const registeredItemsDisplay = this.props.itemsList.map((item, i) =>
			<TouchableOpacity
				key={i}
				onPress={() => {this.props.clickItemFunction ? this.props.clickItemFunction(item) : () => {}}}
				style={[globalStyles.flex, globalStyles.flexDirectionColumn, globalStyles.h100, globalStyles.w100, globalStyles.mxs, globalStyles.mbl]}>

				<Image source={{uri: imageFiles.pathToFile(item.image)}} style={{flex:4}}/>
				<Text style={{fontSize:8, flex:1}}>{item.name}</Text>
			</TouchableOpacity>
		);

		const componentsScrollView = <ScrollView horizontal={true}>{registeredItemsDisplay}</ScrollView>;

		return (
			<CardComponent
				header={this.props.category ? this.props.category : "("+this.props.itemsList.length+") Registered Items"}
				category={this.props.category}
				content={componentsScrollView}
				iconCallback={this.props.clickPanelFunction}
			/>
		)
	}
}