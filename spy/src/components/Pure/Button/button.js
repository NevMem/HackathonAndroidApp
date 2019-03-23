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
			textColor: 'white',
	  	fontSize: 20,
	  	backgroundColor: '#FFE53B',
			backgroundImage: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
	  	borderRadius: 20,
	  	padding: 6,
	  	overflow: 'hidden',
	  	justifyContent: 'center',
	  	alignItems: 'center'
  	},
});