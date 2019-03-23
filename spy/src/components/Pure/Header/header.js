import {View, Text,StyleSheet} from 'react-native';
import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.Header}>
				{
					this.prop.emodzi.map((emodzi,index)=>{
						
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
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	Emodzi:{
		height:50,
		width: 50,
	}
});