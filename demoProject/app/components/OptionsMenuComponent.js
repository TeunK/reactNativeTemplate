/**
 * Created by Teun on 22-5-2018.
 */
import React from 'react';
import { ListItem } from 'react-native-elements'
import {View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const OptionsMenuComponent = ({menuItems}) => (
	<View>
		{
			menuItems.map((item, i) => (
			<ListItem
				button
				key={i}
				title={item.title}
				leftIcon={{ name: item.icon }}
				onPress={item.clickFunction}
			/>
		))
	}
	</View>
);

export default OptionsMenuComponent;