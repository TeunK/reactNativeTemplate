/**
 * Created by Teun on 23-5-2018.
 */

import Realm from 'realm';
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";
import { PermissionsAndroid } from 'react-native';

export default fileManager = {
	writeToMemory: writeToMemory,
	loadImage: loadImage
}

async function loadImage(uri) {
	return RNFetchBlob.fs.readFile(uri, 'base64')
		.then((img) => {
			return img;
		})
		.catch((err) => {
			alert("err: " + err);
		});
	// alert(image.url);
	// return image;
}

async function writeToMemory(fileData) {
	const hasWritePermission = await requestWriteExternalDrivePermission();
	if (hasWritePermission) {
		let fileName = "";
		if ('fileName' in fileData){
			fileName = fileData.fileName;
		} else if ('uri' in fileData){
			fileName = getFileNameFromPath(fileData.uri);
		}

		let imageDataString = "";
		if ('data' in fileData) {
			imageDataString = fileData.data;
		} else if ('base64' in fileData) {
			imageDataString = fileData.base64;
		}

		if (fileName !== "" && imageDataString !== "") {
			let targetImageLocation = Constants.PictureDir + '/' + fileName;
			await RNFetchBlob.fs.writeFile(targetImageLocation, imageDataString, 'base64');
			return targetImageLocation;
		}
	} else {
		alert("Error: App does not have permission to write to external storage");
	}
}

async function requestWriteExternalDrivePermission() {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
			{
				'title': 'Requesting permission to write to external storage',
				'message': 'Cannot save file without this permission.'
			}
		);
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log("You can use the camera");
			return true;
		} else {
			console.log("Camera permission denied")
		}
	} catch (err) {
		console.warn(err);
		return false;
	}
	return false;
}

const getFileNameFromPath = (uri) => {
	return uri.substring(uri.lastIndexOf('/')+1);
};