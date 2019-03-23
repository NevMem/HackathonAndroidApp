import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
	Page:{
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//fontFamily: 'Montserrat', sans-serif; TODO
		flex: 1,
	},
	Auth:{
		width: 250,
		height: 300,
		borderRadius: 10,
		borderStyle:'solid',
		borderWidth:2,
		borderColor:'black',
		backgroundColor: 'green',
		alignItems:'center',
		justifyContent: 'space-around',
	},
	ButtonAuth:{
		width: 150,
		height:50
	}
});