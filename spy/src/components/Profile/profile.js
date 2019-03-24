import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

import Footer from '../Pure/Footer/footer.js';

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			socket:this.props.socket
		};
	}

	goToConcerts = () => {
		this.props.router.replace.MainMenu({
			socket:this.state.socket
		},{type:'none'});
	}

	goToAdd = () => {
		this.props.router.replace.Browse({
			socket:this.state.socket
		},{type:'none'});
	}

	render() {
		return(
			<View style={styles.Profile}>
				<View style={styles.Content}>
					<View style={styles.Header}>
							<Text style={styles.Heading}>
							Профиль
							</Text>
					</View>
					<View style={styles.Self}>		
						<Text style={styles.Name}>Тимофей Смирнов</Text>
						<View style={styles.Icon}>
							<Image source={require('../../images/user.png')}
							style={{width: 100,height: 100,}}/>
						</View>
					</View>
					<View style={styles.Stats}>
						<View style={styles.Concerts}>
							<Image source={require('../../images/friends.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Друзья</Text>
								<Text style={styles.Count}>69</Text>
							</View>
						</View>
						<View style={styles.Emodzi}>
							<Image source={require('../../images/micro.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Исполнители</Text>
								<Text style={styles.Count}>228</Text>
							</View>
						</View>
					</View>
					<View style={styles.Stats}>
						<View style={styles.Concerts}>
							<Image source={require('../../images/Concerts.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Концерты</Text>
								<Text style={styles.Count}>47</Text>
							</View>
						</View>
						<View style={styles.Emodzi}>
							<Image source={require('../../images/emodzi.png')}
							style={{width: 50,height: 50,}}/>
							<View style={styles.CategoryText}>
								<Text style={styles.Category}>Эмоции</Text>
								<Text style={styles.Count}>322</Text>
							</View>
						</View>
					</View>
				</View>
			<Footer active="Profile"
				Quit={this.props.router.reset.Auth}
				Profile={()=>{}}
				Add={this.goToAdd}
				Concert ={this.goToConcerts}
			/>
			</View>
		);
	}
}

const Screen_width=Dimensions.get('window').width;

const styles=StyleSheet.create({
	Profile:{
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#20242d',
	},
	Self:{
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexGrow:5
	},
	Stats:{
		flexGrow:1,
		flexDirection: 'row',
	},
	Concerts:{
		width:Screen_width/2,
		borderRightWidth:1 ,
		borderColor: 'black',
		borderStyle: 'solid',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	Emodzi:{
		paddingHorizontal: 15,
		width:Screen_width/2,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	CategoryText:{
		textAlign:'right'
	},
	About:{
		color:'#8f929b',
		textAlign: 'center',
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 10,
		paddingBottom: 10,
	},
	Category:{
		color:'#8f929b',
		textAlign: 'center',
		fontSize: 18,
		textAlign:'right'
	},
	Icon:{
		borderRadius: 50,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
		marginTop: 40,
		padding: 3,
	},
	Content:{
		flex: 1,
		flexDirection: 'column',
		marginBottom: 10,
	},
	Count:{
		color:'white',
		textAlign: 'center',
		fontSize: 20,
		textAlign:'right'
	},
	Name:{
		color:'white',
		textAlign: 'center',
		fontSize: 24,
		padding: 3,
	},
	Header:{
		flexGrow:1,
		alignSelf: 'flex-start',
		width:Screen_width,
		padding: 3,
	},
	Heading: {
		fontSize: 28,
		color: 'white',
		fontWeight: '400',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'center',
		padding: 3,
	}
});