/**
 * Created by Teun on 23-5-2018.
 */

import Realm from 'realm';
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";

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
}

const getFileNameFromPath = (uri) => {
	return uri.substring(uri.lastIndexOf('/')+1);
};