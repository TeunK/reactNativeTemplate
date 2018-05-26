
import RNFetchBlob from 'react-native-fetch-blob'
import Constants from "../../config/constants";

export default imageFiles = {
	getImages: getImages,
	getImageFilePath: getImageFilePath,
	pathToFile: pathToFile
}

async function getImages() {
	try {
		const pictureDirExists = await RNFetchBlob.fs.exists(Constants.PictureDir)
		if (pictureDirExists) {
			const imageList = await RNFetchBlob.fs.ls(Constants.PictureDir);
			return imageList;
		} else
			return [];
	} catch (err) {
		return [];
	}
}

function pathToFile(filePath) {
	if (filePath.substring(0,7) === "file://") {
		return filePath
	} else {
		return "file://" + filePath
	}
}

function getImageFilePath(imageName) {
	return "file://" + Constants.PictureDir + "/" + imageName;

}