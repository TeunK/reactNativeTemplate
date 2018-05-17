import React from 'react';
import {
} from 'react-native';
import HomeScreen from "./app/screens/home";
import DashboardScreen from "./app/screens/dashboard";
import ProfileScreen from "./app/screens/profile";
import SigninScreen from "./app/screens/signin";
import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Dashboard: {screen: DashboardScreen},
    Profile: {screen: ProfileScreen},
    Signin: {screen: SigninScreen}
});

export default App;
