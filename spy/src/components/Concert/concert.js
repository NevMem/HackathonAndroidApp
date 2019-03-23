import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../Pure/Header/header.js';
import {styles} from './concertstyle.js';

const Emodzi=[
	require('../../images/Emodzi/1.png'),
	require('../../images/Emodzi/2.png'),
	require('../../images/Emodzi/3.png'),
	require('../../images/Emodzi/4.png'),
	require('../../images/Emodzi/5.png'),
	require('../../images/Emodzi/6.png'),
]

export default class Concert extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			socket:this.props.socket,
			token:this.props.token,
			emodzi:[0,1,2,3,4,5,6],
			curEmoji:[]
		};
	}

	componentDidMount() {
		this.state.socket.on('emodzi', data => {
			this.setState({
				emodzi:emodzi
			});
		});
		this.state.socket.on('tray new emoji', index => {
			let arr=this.state.emodzi;
			arr[index]++;
			let newCurEmo=this.state.curEmoji;
			newCurEmo.push(index);
			this.setState({
				emodzi:arr,
				curEmoji:newCurEmo,
			});
		});
	}

	render() {
		return(
			<View style={styles.Page}>
				<Header emodzis={this.state.emodzi}/>
				<View style={styles.Emodzis}>
					<View style = {styles.Emodzi}></View>
					<View style = {styles.Emodzi}></View>
					<View style = {styles.Emodzi}></View>
					<View style = {styles.Emodzi}></View>
					<View style = {styles.Emodzi}></View>
					<View style = {styles.Emodzi}></View>
				</View>
			</View>
		);
	}
}