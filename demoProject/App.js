import React from 'react';
import {View} from 'react-native';
import { updateFocus } from '@patwoz/react-navigation-is-focused-hoc';
import AppNavigator from "./app/navigators/BottomTabNavigator";


export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<AppNavigator onNavigationStateChange={(prevState, currentState) => {
						console.log('onNavigationStateChange()');
						// update HOC state
						updateFocus(currentState)
					}}
				/>
			</View>
		)
	}
}