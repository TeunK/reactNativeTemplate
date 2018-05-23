/**
 * Created by Teun on 22-5-2018.
 */
import React from 'react';
import {
	Image,
	ScrollView, Text,
	View
} from 'react-native';
import CardComponent from "./CardComponent";
import {Tile} from "react-native-elements";
import fileManager from "../lib/storage/fileManager";
import imageFiles from "../domain/repository/imageFiles";
import images from "../files/images/index";

export class ItemScrollerComponent extends React.Component {

	render() {
		const registeredItemsDisplay = this.props.itemsList.map((item, i) =>
			<View key={i}>
				<Tile
					imageSrc={images.deedee}
					title={item.name ? item.name : ''}
					titleStyle={{fontSize:8, textAlign:"left", fontWeight:"100"}}
					width={100}
					height={100}
					containerStyle={{backgroundColor:"#EEE", margin:10, marginBottom:20}}
				/>
			</View>
		);

		const componentsScrollView = <ScrollView horizontal={true}>{registeredItemsDisplay}</ScrollView>;

		return (
			<CardComponent
				header={"("+this.props.itemsList.length+") Registered Items"}
				content={componentsScrollView}
				iconCallback={this.props.clickFunction}
			/>
		)
	}
}