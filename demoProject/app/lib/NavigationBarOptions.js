import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default NavigationBarOptions = {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'Home') {
				iconName = `ios-home${focused ? '' : '-outline'}`;
			} else if (routeName === 'Dashboard') {
				iconName = `ios-laptop${focused ? '' : '-outline'}`;
			} else if (routeName === 'Profile') {
				iconName = `ios-contact${focused ? '' : '-outline'}`;
			} else if (routeName === 'Signin') {
				iconName = `ios-person-add${focused ? '' : '-outline'}`;
			} else if (routeName === 'ItemsList') {
				iconName = `ios-menu${focused ? '' : '-outline'}`;
			}

			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			return <Ionicons name={iconName} size={25} color={tintColor} />;
		},
	}),
	tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	},
};