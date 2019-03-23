import {View, Text,StyleSheet, Image} from 'react-native';
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
	render() {
		return (
			<View style={styles.Header}>
				{
					this.props.emodzis.map((emodzi,index)=>{
						if(this.props.emodzis.length-index>5)
							return <Text key={index}></Text>
						return (
							<View key={index} style={styles.Emodzi}>
								<Image source={Emodzi[emodzi]} 
								style={{width: 40, height: 40}}/>
							</View>
						);
					})
				}
			</View>
		);
	}
}

const styles=StyleSheet.create({
	Header:{
		flex: 1,
		height: 60,
		width:200,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'green',
	},
	Emodzi:{
		height:50,
		width: 50,
	}
});