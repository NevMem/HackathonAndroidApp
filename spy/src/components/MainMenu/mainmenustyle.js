import {StyleSheet, Dimensions} from 'react-native';

const Screen_Width = Dimensions.get('window').width;

const Icon_Width = Screen_Width*35/100;
const Height=200;

export const styles=StyleSheet.create({
	Page:{
		flexDirection: 'column',
		flex: 1,
	},
	HeaderText:{
		color: 'black',
		fontSize: 20,
	},
	Concerts:{
		flexGrow:1,
		flex: 1,
		width:Screen_Width,
		backgroundColor: 'green',
		alignItems: 'center'
	},
	HeaderView: {
		flex: 1,
		flexGrow: 1,
		width: Screen_Width,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row'
	},
	ScrollView:{
		backgroundColor: '#20242d',
		width:Screen_Width,
	},
	Concert:{
		width: Screen_Width,
		height: Height,
		borderBottomWidth: 1,
		borderBottomColor: '#2f333c',
		borderStyle: 'solid',
		flexDirection: 'row',
	},
	IconWrapper: {
		padding: 7,
		borderRadius: 10,
	},
	Icon:{
		width:Icon_Width - 14,
		height:Height-15,
		backgroundColor: '#20242d',
		borderRadius: 10
	},
	Name:{
		color:'white',
		textAlign: 'left',
		fontSize: 22
	},
	Address:{
		color:'#8f929b',
		textAlign: 'left'
	},
	Date:{
		color:'#8f929b',
		textAlign: 'center'
	},
	Info:{
		width:Screen_Width-Icon_Width,
		flex: 1,
		backgroundColor: '#20242d',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		paddingLeft: 10
	},
	ButtonHere:{
		height:50,
		width: Screen_Width - Icon_Width - 30,
		alignItems: 'flex-end',
		marginBottom: 10
	},
	ButtonText: {
		paddingLeft: 24,
		paddingRight: 24
	},
	Heading: {
		fontSize: 28,
		color: 'white',
		fontWeight: '400',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10
	}
});