import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';


export default class ConcertRouter extends React.Component {
	render() {
		return (
			<View style={styles.Router}>
			</View>
		);
	}
}

const height = Dimensions.get('window').height;
 

const styles=StyleSheet.create({
	Router:{
		height: height,
		width: 20,
		backgroundColor: 'red',
		flexDirection: 'column',
	}
});