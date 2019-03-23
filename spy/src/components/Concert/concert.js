import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../Pure/Header/header.js';
import ConcertRouter from '../Pure/ConcertRouter/concertrouter.js';
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
			emodzi:[1,2,3,4,5],
		};
	}

	componentDidMount() {
		this.state.socket.on('emodzi', data => {
			this.setState({
				emodzi:emodzi
			});
		});
	}

	render() {
		return(
			<View style={styles.Page}>
				<ConcertRouter/>
				<View style={styles.Content}>
					<Header emodzis={this.state.emodzi}/>
					<TouchableOpacity>
						
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}