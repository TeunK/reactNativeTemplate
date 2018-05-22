import React from 'react';
import {View} from 'react-native';
import HomeScreen from "./app/screens/home";
import DashboardScreen from "./app/screens/dashboardNav";
import ProfileScreen from "./app/screens/profile";
import SigninScreen from "./app/screens/signin";
import {StackNavigator, createBottomTabNavigator} from 'react-navigation';
import ItemsList from "./app/screens/itemsList";
import NavigationBarOptions from "./app/lib/NavigationBarOptions";
import { updateFocus } from '@patwoz/react-navigation-is-focused-hoc';

const AppNavigator = createBottomTabNavigator({
		Home: {screen: HomeScreen},
		Dashboard: {screen: DashboardScreen},
		Profile: {screen: ProfileScreen},
		Signin: {screen: SigninScreen},
	}, NavigationBarOptions
);

export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<AppNavigator
					onNavigationStateChange={(prevState, currentState) => {
						console.log('onNavigationStateChange()');
						// update HOC state
						updateFocus(currentState)
					}}
				/>
			</View>
		)
	}
}