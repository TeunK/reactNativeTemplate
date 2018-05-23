import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default NavigationBarOptions = {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'HomeScreen') {
				iconName = `ios-home${focused ? '' : '-outline'}`;
			} else if (routeName === 'DashboardNavigator') {
				iconName = `ios-laptop${focused ? '' : '-outline'}`;
			} else if (routeName === 'ProfileScreen') {
				iconName = `ios-contact${focused ? '' : '-outline'}`;
			} else if (routeName === 'SigninScreen') {
				iconName = `ios-person-add${focused ? '' : '-outline'}`;
			}

			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			return <Ionicons name={iconName} size={25} color={tintColor} />;
		}
	}),
	tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	}
};