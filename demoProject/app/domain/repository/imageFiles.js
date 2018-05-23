
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";

export default imageFiles = {
	getImages: getImages,
	getImageFilePath: getImageFilePath
}

async function getImages() {
	return RNFetchBlob.fs.exists(Constants.PictureDir)
		.then(async () => {
			return await RNFetchBlob.fs.ls(Constants.PictureDir);
		})
		.catch(() => {
			return [];
		});
}

function getImageFilePath(imageName) {
	return "file://" + Constants.PictureDir + "/" + imageName;
}