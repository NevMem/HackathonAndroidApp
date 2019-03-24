import {StyleSheet, Dimensions} from 'react-native';

const Screen_Width = Dimensions.get('window').width;
const Screen_Height = Dimensions.get('window').height;
const Emodzi_Padding_Hor = 30
const Emodzi_Padding_Ver = 30
const Emodzi_Size = Math.min(Screen_Width / 2, (Screen_Height - 61) / 3.5)

export const styles=StyleSheet.create({
	Page:{
		flexDirection: 'column',
		flexWrap: 'wrap',
		flex: 1,
		backgroundColor: '#20242d',
	},
	HeaderView: {
		width: Screen_Width,
		height:60,
		paddingTop: 5,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		textAlign:'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Heading: {
		fontSize: 28,
		color: 'white',
		fontWeight: '400',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		textAlign:'center',
	},
	Emodzis:{
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1,
		maxWidth: 600,
		alignItems: 'center',
		justifyContent: 'space-around',
		// backgroundColor: 'purple',
	},
	Emodzi:{
		// flex: 1,
		// flexShrink:1,
		// flexGrow:1,
		// minWidth: 170,
		// minHeight: 170,
		// maxWidth:300,
		// maxHeight: 300,
		// textAlign: 'center',
		width: Emodzi_Size,
		height: Emodzi_Size,

		// backgroundColor: 'red',
	},
	IconWrapper: {
		width: Emodzi_Size - 2 * Emodzi_Padding_Hor,
		height: Emodzi_Size - 2 * Emodzi_Padding_Ver,
	},
	EmodziIconWrapper: {
		position: 'absolute',
		top: Emodzi_Padding_Ver,
		left: Emodzi_Padding_Hor,
		width: Emodzi_Size - 2 * Emodzi_Padding_Hor,
		height: Emodzi_Size - 2 * Emodzi_Padding_Ver,
	},
	EmodziAmount:{
		// backgroundColor: 'green',
		// alignItems: 'center',
		position: 'absolute',
		right: 14,
		bottom: 14,

	},
	EmodziAmountCorner:{
		// alignSelf: 'flex-end',
		// borderWidth: 1,
		// borderColor: 'yellow',
		// borderStyle: 'solid',
		// width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'black',
	},
	EmodziText:{
		color:'white',
		fontSize: 24,
		fontWeight: '200',
	}
});