/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Button, Text, View, StyleSheet} from "react-native";
import CameraComponent from "../components/CameraComponent";
import SimpleCameraComponent from "../components/SimpleCameraComponent";
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'

class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Profile',
		headerStyle: {
			backgroundColor: '#212121'
		},
		headerTitleStyle: {
			color: '#FFF'
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			showCamera: false,
		};
	}

	componentDidMount() {
		this.openCamera();
	}

	openCamera(){
		this.setState({
			showCamera:true
		});
	}

	closeCamera() {
		this.setState({
			showCamera: false
		})
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isFocused && nextProps.isFocused) {
			this.openCamera();
		}
		if (this.props.isFocused && !nextProps.isFocused) {
			this.closeCamera();
		}
	}

	render() {
		let cameraComponent = this.state.showCamera ? <CameraComponent/> : <Text>INVISIBLE</Text>;
		return (
			<View style={styles.container}>
				{cameraComponent}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#F5FCFF',
	}
});

export default withNavigationFocus(ProfileScreen);