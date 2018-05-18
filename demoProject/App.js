import React from 'react';
import {
} from 'react-native';
import HomeScreen from "./app/screens/home";
import DashboardScreen from "./app/screens/dashboard";
import ProfileScreen from "./app/screens/profile";
import SigninScreen from "./app/screens/signin";
import {StackNavigator, createBottomTabNavigator} from 'react-navigation';
import ItemsList from "./app/screens/itemsList";
import NavigationBarOptions from "./app/lib/NavigationBarOptions";

const App = createBottomTabNavigator({
		Home: {screen: HomeScreen},
		Dashboard: {screen: DashboardScreen},
		Profile: {screen: ProfileScreen},
		Signin: {screen: SigninScreen},
		ItemsList: {screen: ItemsList}
	}, NavigationBarOptions
);

export default App;
