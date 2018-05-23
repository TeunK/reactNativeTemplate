/**
 * Created by Teun on 22-5-2018.
 */
import React from 'react';
import {
	Image,
	ScrollView, Text, TouchableOpacity,
	View
} from 'react-native';
import CardComponent from "./CardComponent";
import {Tile} from "react-native-elements";
import fileManager from "../lib/storage/fileManager";
import imageFiles from "../domain/repository/imageFiles";

export class RegisteredItemsScrollerComponent extends React.Component {

	render() {
		const registeredItemsDisplay = this.props.itemsList.map((item, i) =>
			<TouchableOpacity
				key={i}
				onPress={() => {alert(item.image)}}
				style={{display: "flex", flexDirection: 'column', height:100, width:100, margin:5, marginBottom:15}}>

				<Image source={{uri: item.image}} style={{flex:4}}/>
				<Text style={{fontSize:8, flex:1}}>{item.name}</Text>
				{/*<Tile*/}
					{/*imageSrc={{uri: item.image}}*/}
					{/*title={item.name ? item.name : ''}*/}
					{/*titleStyle={{fontSize:8, textAlign:"left", fontWeight:"100"}}*/}
					{/*width={100}*/}
					{/*height={100}*/}
					{/*containerStyle={{backgroundColor:"#EEE", margin:10, marginBottom:20}}*/}
				{/*/>*/}
			</TouchableOpacity>
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