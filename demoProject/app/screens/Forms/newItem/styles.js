import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40,
		backgroundColor: '#ffffff',
	},
	title: {
		fontSize: 30,
		alignSelf: 'center',
		marginBottom: 30
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	previewImage: {
		width:250,
		height:250,
		justifyContent: 'center',
		alignSelf:'stretch',
		marginTop: 5,
		marginBottom: 5
	}
})