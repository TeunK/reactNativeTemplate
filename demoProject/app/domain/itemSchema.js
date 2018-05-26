/**
 * Created by Teun on 16-5-2018.
 */

import Constants from "../config/constants";

export const ItemSchema = {
	name: Constants.localDataStorageTypes.item,
	properties: {
		name: 'string',
		category: 'string',
		image: 'string',
	}
};