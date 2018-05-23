
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";

export default imageFiles = {
	getImages: getImages
}

async function getImages() {
	return await RNFetchBlob.fs.ls(Constants.PictureDir);
}