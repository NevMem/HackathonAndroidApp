import {View,Text} from 'react-native';
import React from 'react';

export default class Concert extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			socket:socket,
			emodzi:[]
		};
	}

	componentDidMount() {
		socket.on('emodzi', data => {
			this.setState({
				emodzi:emodzi
			});
		});
	}

	render() {
		return(
			<View style={styles.Page}>
				<Router/>
				<Header/>
				<Text>Concert</Text>
			</View>
		);
	}
}