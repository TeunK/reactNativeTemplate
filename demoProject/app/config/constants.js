/**
 * Created by Teun on 16-5-2018.
 */

import RNFetchBlob from 'react-native-fetch-blob'

const projectName = "demoProject";

export default Constants = {
	localDataStorageTypes: {
		item: "Item",
		category: "Category"
	},
	PictureDir: RNFetchBlob.fs.dirs.PictureDir + "/" + projectName
}