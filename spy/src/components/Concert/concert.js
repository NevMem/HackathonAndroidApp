import {View, Text, TouchableOpacity, Image} from 'react-native';
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
			curEmoji:[1,2,3,4,5],
			concertId:this.props.concertId
		};
	}

	componentDidMount() {
		this.state.socket.on('emodzi', data => {
			this.setState({
				emodzi:emodzi
			});
		});
		this.state.socket.on('tray new emoji', index => {
			console.log(index);
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

	sendEmodzi = (index) => {
		console.log(index);
		this.state.socket.emit('emoji clicked',{
			concertId:this.state.concertId,
			index:index
		});
	}

	render() {
		let arr=[1,2,3,4,5,6];
		return(
			<View style={styles.Page}>
				<Header emodzis={this.state.curEmoji}/>
				<View style={styles.Emodzis}>
				{
					arr.map(key=>{
						return(
							<View style = {styles.Emodzi}>
								<TouchableOpacity 
								onPress={() => this.sendEmodzi.call(this,key)}>
									<Image source={Emodzi[key-1]}
									style={{width: 100, height: 100}}/>
								</TouchableOpacity>
								<View style={styles.EmodziAmount}>
									<View style={styles.EmodziAmountCorner}>
										<Text style={styles.EmodziText}> 
											{this.state.emodzi[key]}
										</Text>
									</View>
								</View>
							</View>
						)
					})
				}
				</View>
			</View>
		);
	}
}