/**
 * Created by Teun on 22-5-2018.
 */

import HomeScreen from "../screens/home/HomeScreen";
import DashboardNavigator from "../navigators/DashboardNavigator";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SigninScreen from "../screens/signin/SignInScreen";
import {createBottomTabNavigator} from 'react-navigation';
import NavigationBarOptions from "../../app/lib/NavigationBarOptions";

export default AppNavigator = createBottomTabNavigator({
		HomeScreen: {screen: HomeScreen},
		DashboardNavigator: {screen: DashboardNavigator},
		ProfileScreen: {screen: ProfileScreen},
		SigninScreen: {screen: SigninScreen},
	}, NavigationBarOptions
);
