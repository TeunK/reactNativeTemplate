/**
 * Created by Teun on 16-5-2018.
 */
import React from 'react';
import {Text, View} from "react-native";
import SimpleCameraComponent from "../../components/simpleCamera/SimpleCameraComponent";
import CameraComponent from "../../components/camera/CameraComponent";
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc'
import styles from './styles';

class ProfileScreen extends React.Component {
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

export default withNavigationFocus(ProfileScreen);