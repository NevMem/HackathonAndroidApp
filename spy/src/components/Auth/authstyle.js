import {StyleSheet, Dimensions} from 'react-native';

const Screen_width=Dimensions.get('window').width;

export const styles=StyleSheet.create({
	Auth:{
		alignItems:'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flex: 1,
		//TODO fontFamily: 'Montserrat', sans-serif,
		marginTop: -20,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 50,
	},
	H1:{
		fontWeight: 'bold',
		color: 'black',
		fontSize: 36,
		margin: 0,
	},
	ButtonAuth:{
		width: 150,
		height: 50,
	},
	Input:{
		width:Screen_width*8/10
	},
	Span:{
		color: 'white',
		fontSize: 24,
		fontWeight: "300",
	},
	Social:{
		marginTop: 20,
		marginBottom: 20,
		width: 100,
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	A:{
		color: '#D7D7D9FF',
		fontSize: 24,
		marginTop: 25,
		marginBottom: 15,
	},
	EnterText:{
		color:'black',
		fontSize: 24,
		fontWeight: "200",
	},
	SocialContainer:{
		flexDirection: 'row',
    	justifyContent: 'flex-start',
	}
});