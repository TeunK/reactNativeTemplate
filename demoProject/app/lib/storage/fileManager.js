/**
 * Created by Teun on 23-5-2018.
 */

import Realm from 'realm';
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";

export default fileManager = {
	writeToMemory: writeToMemory
}

async function writeToMemory(fileData) {
	let fileName = getFileName(fileData.uri);
	let base64Str = fileData.base64;
	let targetImageLocation = Constants.PictureDir+'/'+fileName;
	await RNFetchBlob.fs.writeFile(targetImageLocation, base64Str, 'base64');
}

const getFileName = (uri) => {
	return uri.substring(uri.lastIndexOf('/')+1);
};