/**
 * Created by Teun on 16-5-2018.
 */
import Realm from 'realm';

export default LocalDataStorage = {
	save: (schema, instance) => {
		Realm.open({schema: [schema]})
			.then(realm => {
				realm.write(() => {
					realm.create(schema.name, instance)
				})
			})
	},
	get: (schema) => {
		return Realm.open({schema: [schema]})
			.then(realm => {
				return realm.objects(schema.name);
			})
	},
	remove: (schema, instance) => {
		return Realm.open({schema: [schema]})
			.then(realm => {
				realm.write(() => {
					realm.remove(instance);
				})
			})
	}
};
