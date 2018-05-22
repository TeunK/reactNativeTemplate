import React from 'react';
import { View, Text, Image } from 'react-native'
import {Card, ListItem, Button, Badge, Icon} from 'react-native-elements'

const users = [
	{
		name: 'brynn',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	}
];

export const TitleCardComponent = ({img, header, content}) =>(
	<View>
		<Card
			image={img}>
			<Text>{header}</Text>
			<Text style={{marginBottom: 10}}>
				{content}
			</Text>
		</Card>
	</View>
);

export const CardComponent = ({header, content, iconCallback}) => (
	<View>
		<Card>
			<View style={{display: "flex", flexDirection: 'row', height:40}}>
				<View style={{ flex:6,  justifyContent:"center"}}>
					<Text>{header}</Text>
				</View>
				{
					iconCallback && <Icon
						raised
						size={12}
						name='plus'
						type='font-awesome'
						color='#5bad4c'
						onPress={iconCallback} />
				}
			</View>
			{content}
		</Card>
	</View>
);
