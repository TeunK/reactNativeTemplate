/**
 * Created by Teun on 13-6-2018.
 */
import itemRepository from '../domain/repository/items';

export default ItemsService = {
	getExistingCategories: async () => {
		try {
			const items = await itemRepository.getAllItems();

			let itemCategories = [];

			for (let itemId in Object.keys(items)) {
				const item = items[itemId];
				if (!itemCategories.includes(item.category)) {
					itemCategories.push(item.category)
				}
			}

			return itemCategories;
		} catch (err) {
			alert(err);
		}
	}
};