import React from 'react';
import { View, Text } from 'react-native'
import {Card, Icon} from 'react-native-elements'

export default CardComponent = ({header, content, iconCallback}) => (
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
