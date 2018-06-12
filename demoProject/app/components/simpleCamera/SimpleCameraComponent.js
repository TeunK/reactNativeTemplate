'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import fileManager from '../../lib/storage/fileManager';
import globalStyles from "../../config/globalStyles";
import styles from "./styles";

export default class SimpleCameraComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style = {styles.preview}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					permissionDialogTitle={'Permission to use camera'}
					permissionDialogMessage={'We need your permission to use your camera phone'}
				/>
				<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
					<TouchableOpacity
						onPress={this.takePicture.bind(this)}
						style = {styles.capture}
					>
						<Text style={globalStyles.fs14}> SNAP </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	takePicture = async function() {
		if (this.camera) {
			const options = { quality: 0.5, base64: true };
			let data;
			try {
				data = await this.camera.takePictureAsync(options);
			} catch(err) {
				alert("CAM: "+err);
			}

			try {
				await fileManager.writeToMemory(data);
			} catch(err) {
				alert("STORAGE: "+err);
			}
		}
	};
}