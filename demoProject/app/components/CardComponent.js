import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {Card, Icon} from 'react-native-elements'
import TouchableItem from "react-navigation/src/views/TouchableItem";

export default CardComponent = ({header, content, iconCallback}) => (
	<View>
		<Card>
			<View style={{display: "flex", flexDirection: 'row', height:40}}>
				<View style={{ flex:6,  justifyContent:"center"}}>
					<Text>{header}</Text>
				</View>
				{
					iconCallback && <TouchableOpacity onPress={iconCallback}><Icon
						raised
						size={12}
						name='plus'
						type='font-awesome'
						color='#5bad4c'/></TouchableOpacity>
				}
			</View>
			{content}
		</Card>
	</View>
);
