/**
 * Created by Teun on 16-5-2018.
 */

import Constants from "../config/constants";

export const CategorySchema = {
	name: Constants.localDataStorageTypes.category,
	primaryKey: 'name',
	properties: {
		name: 'string'
	}
};