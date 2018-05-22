/**
 * Created by Teun on 22-5-2018.
 */

import HomeScreen from "../../app/screens/HomeScreen";
import DashboardNavigator from "../navigators/DashboardNavigator";
import ProfileScreen from "../../app/screens/ProfileScreen";
import SigninScreen from "../../app/screens/SignInScreen";
import {createBottomTabNavigator} from 'react-navigation';
import NavigationBarOptions from "../../app/lib/NavigationBarOptions";

export default AppNavigator = createBottomTabNavigator({
		HomeScreen: {screen: HomeScreen},
		DashboardNavigator: {screen: DashboardNavigator},
		ProfileScreen: {screen: ProfileScreen},
		SigninScreen: {screen: SigninScreen},
	}, NavigationBarOptions
);
