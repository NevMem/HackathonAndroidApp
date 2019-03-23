import {View, Text,StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import React from 'react';

const Emodzi=[
	require('../../../images/Emodzi/1.png'),
	require('../../../images/Emodzi/2.png'),
	require('../../../images/Emodzi/3.png'),
	require('../../../images/Emodzi/4.png'),
	require('../../../images/Emodzi/5.png'),
	require('../../../images/Emodzi/6.png'),
]

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
  onContentSizeChange = (width,height) => {
		this.refs.ScrollView.scrollTo({x:width});
	}
	render() {
		return (
			<View style={styles.Header}>
				<ScrollView 
					ref='ScrollView'
					scrollEnabled={false}
					horizontal={true}
					onContentSizeChange={this.onContentSizeChange}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
				>
				{
					this.props.emodzis.map((emodzi,index)=>{
						return (
							<View key={index} style={styles.Emodzi}>
								<Image source={Emodzi[emodzi]} 
								style={{width: 40, height: 40}}/>
							</View>
						);
					})
				}
				</ScrollView>
			</View>
		);
	}
}

const Screen_width=Dimensions.get('window').width;

const styles=StyleSheet.create({
	Header:{
		height: 60,
		width:Screen_width,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'green',
	},
	Emodzi:{
		height:50,
		width: 50,
		marginRight: 15,
		marginTop:'auto',
		marginBottom: 'auto',
	}
});