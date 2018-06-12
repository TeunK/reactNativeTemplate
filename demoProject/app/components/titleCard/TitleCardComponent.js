import React from 'react';
import { View, Text } from 'react-native'
import {Card} from 'react-native-elements'
import globalStyles from "../../config/globalStyles";

export default TitleCardComponent = ({img, header, content}) =>(
	<View>
		<Card
			image={img}>
			<Text>{header}</Text>
			<Text style={globalStyles.mbm}>
				{content}
			</Text>
		</Card>
	</View>
);
