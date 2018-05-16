
import React, { Component } from 'react';
import Realm from 'realm';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class RealmSampleComponent extends Component {

	constructor(props) {
		super(props);
		this.state = { realm: null };
	}

	componentWillMount() {
		Realm.open({
			schema: [{name: 'Dog', properties: {name: 'string'}}]
		}).then(realm => {
			realm.write(() => {
				realm.create('Dog', {name: 'Rex'});
			});
			this.setState({ realm });
		});
	}

	render() {
		const info = this.state.realm
			? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
			: 'Loading...';

		return (
			<View>
				<Text>
					{info}
				</Text>
			</View>
		);
	}
}