/**
 * Created by Teun on 22-5-2018.
 */

import React from 'react';
import {View} from "react-native";
import OptionsMenuComponent from "../components/OptionsMenuComponent";
import CardComponent from "../components/CardComponent";
import {dashboardMenuOptionsList} from "../config/DashboardMenuOptions";
import dashboardScreenHeaderOptions from "../config/navigationOptionHeaders/dashboardScreenHeaderOptions";


export default class DashboardScreen extends React.Component {
	static navigationOptions = dashboardScreenHeaderOptions;

	render() {
		const options = <OptionsMenuComponent menuItems={dashboardMenuOptionsList(this)}/>;
		return (
			<View>
				<CardComponent
					header="Options"
					content={options}
				/>
			</View>
		)
	}
}