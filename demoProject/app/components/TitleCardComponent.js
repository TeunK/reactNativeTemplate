import React from 'react';
import { View, Text } from 'react-native'
import {Card} from 'react-native-elements'

export default TitleCardComponent = ({img, header, content}) =>(
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
