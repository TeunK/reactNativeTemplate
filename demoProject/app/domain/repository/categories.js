/**
 * Created by Teun on 22-5-2018.
 */
import LocalDataStorage from "../../lib/storage/localDataStorage";
import {CategorySchema} from "../../domain/categorySchema";

export default CategoryRepository = {
	saveCategory: (category) => {
		LocalDataStorage.save(CategorySchema, category);
	},
	updateCategory: (category) => {
		LocalDataStorage.update(CategorySchema, category);
	},
	deleteCategory: (category) => {
		LocalDataStorage.remove(CategorySchema, category);
	},
	getAllCategories: async () => {
		return await LocalDataStorage.get(CategorySchema)
	},
	wipeAllCategories: async () => {
		await LocalDataStorage.wipe(CategorySchema);
	}
}
