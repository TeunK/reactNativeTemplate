/**
 * Created by Teun on 22-5-2018.
 */
import images from "../../files/images/index";
import LocalDataStorage from "../../lib/storage/localDataStorage";
import {ItemSchema} from "../../domain/itemSchema";

export default itemRepository = {
	getDummyItems: () => {
		return itemsList
	},
	saveItem: (itemDetails) => {
		LocalDataStorage.save(ItemSchema,itemDetails);
	},
	getAllItems: async () => {
		return await LocalDataStorage.get(ItemSchema)
	},
	wipeAllItems: async () => {
		await LocalDataStorage.wipe(ItemSchema);
	}
}

const itemsList = [
	{
		name: "purple crayons",
		image: images.deedee
	},
	{
		name: "pillow",
		image: images.deedee
	},
	{
		name: "planttub",
		image: images.deedee
	},
	{
		name: "glass window",
		image: images.deedee
	},
	{
		name: "windsor castle",
		image: images.deedee
	},
	{
		name: "extra long name to see what happens when this thing gets cropped",
		image: images.deedee
	}
];
