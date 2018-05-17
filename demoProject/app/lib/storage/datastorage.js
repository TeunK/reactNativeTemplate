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
					let instances = realm.objects(schema.name).filtered('name = $0',instance.name);
					realm.delete(instances);
				})
			})
	},
	removeWhere: (schema, filterQuery) => {
		alert(filterQuery);
		return Realm.open({schema: [schema]})
			.then(realm => {
				realm.write(() => {
					let instances = realm.objects(schema.name).filtered(filterQuery);
					realm.delete(instances);
				})
			})
	},
	wipe: (schema) => {
		return Realm.open({schema: [schema]})
			.then(realm => {
				realm.write(() => {
					let allInstances = realm.objects(schema.name);
					realm.delete(allInstances);
				})
			})
	}
};
