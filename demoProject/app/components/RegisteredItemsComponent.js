/**
 * Created by Teun on 22-5-2018.
 */
import React from 'react';
import {
	ScrollView,
	View
} from 'react-native';
import {CardComponent} from "./TitleCardComponent";
import {Tile} from "react-native-elements";


export class RegisteredItemsScrollerComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	registeredItemsDisplay = this.props.itemsList.map((item, i) =>
		<View key={i}>
			<Tile
				imageSrc={require('../files/images/deedee.jpg')}
				title={item.name}
				titleStyle={{fontSize:8, textAlign:"left", fontWeight:"100"}}
				width={100}
				height={100}
				containerStyle={{backgroundColor:"#EEE", margin:10, marginBottom:20}}
			/>
		</View>
	);

	componentsScrollView = <ScrollView horizontal={true}>{this.registeredItemsDisplay}</ScrollView>;

	render() {
		return (
			<CardComponent
				header={"("+this.props.itemsList.length+") Registered Items"}
				content={this.componentsScrollView}
				iconCallback={this.props.clickFunction}
			/>
		)
	}
}