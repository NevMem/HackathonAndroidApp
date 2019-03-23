import {StyleSheet} from 'react-native';

export const styles=StyleSheet.create({
	Auth:{
		alignItems:'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flex: 1,
		//TODO fontFamily: 'Montserrat', sans-serif,
		marginTop: -20,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 50,
	},
	H1:{
		fontWeight: 'bold',
		color: 'white',
		fontSize: 36,
		margin: 0,
	},
	ButtonAuth:{
		width: 150,
		height: 50,
	},
	Span:{
		color: 'white',
		fontSize: 24,
	},
	Social:{
		marginTop: 20,
		marginBottom: 20,
		width: 100,
		height: 100,
	},
	A:{
		color: 'white',
		fontSize: 32,
		marginVertical: 15,
		marginHorizontal: 0,
	},
	SocialContainer:{
		flexDirection: 'row',
    	justifyContent: 'flex-start',
	}
});