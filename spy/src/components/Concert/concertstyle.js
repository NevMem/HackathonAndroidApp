import {StyleSheet, Dimension} from 'react-native';

export const styles=StyleSheet.create({
	Page:{
		flexDirection: 'column',
		flexWrap: 'wrap',
		flex: 1,
	},
	Emodzis:{
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1,
		maxWidth: 600,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'purple',
	},
	Emodzi:{
		flex: 1,
		flexShrink:1,
		flexGrow:1,
		margin: 5,
		minWidth: 170,
		minHeight: 170,
		maxWidth:300,
		maxHeight: 300,
		padding: 30,
		textAlign: 'center',
		backgroundColor: 'red',
	},
	EmodziAmount:{
		backgroundColor: 'green',
		alignItems: 'center'
	},
	EmodziAmountCorner:{
		alignSelf: 'flex-end',
		borderWidth: 1,
		borderColor: 'yellow',
		borderStyle: 'solid',
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},
	EmodziText:{
		color:'white'
	}
});