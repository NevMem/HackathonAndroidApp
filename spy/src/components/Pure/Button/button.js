import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react'

export default class Button extends React.Component {
	render() {
		return(
			<TouchableOpacity style={styles.Button}
			 type={this.props.type} 
			 onPress={this.props.onClick}>
			 {this.props.children}
			</TouchableOpacity>
		);
	}
}

Button.defaultProps={
	onClick:()=>{}
};

const styles=StyleSheet.create({
	Button:{
			textAlign:'center',
	  	fontSize: 24,
			backgroundColor: '#FF4B2B',
			color: 'white',
	  	borderRadius: 20,
	  	padding: 6,
	  	overflow: 'hidden',
	  	justifyContent: 'center',
			alignItems: 'center'
  	},
});