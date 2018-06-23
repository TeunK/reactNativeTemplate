/**
 * Created by Teun on 22-5-2018.
 */
export const dashboardMenuOptionsList = (scope) => [
	{
		title: 'Add New Item',
		icon: 'add',
		clickFunction: () => {
			scope.props.navigation.navigate('NewItemForm');
		}
	},
	{
		title: 'Category Configurations',
		icon: 'add',
		clickFunction: () => {
			scope.props.navigation.navigate('CategoryConfigScreen');
		}
	},
	{
		title: 'View All',
		icon: 'list',
		clickFunction: () => {
			scope.props.navigation.navigate('ItemsListScreen');
		}
	}
];