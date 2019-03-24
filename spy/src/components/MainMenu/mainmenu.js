import {View, Text, StyleSheet, 
	ImageBackground,
	ScrollView, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from "./mainmenustyle.js";
import Button from '../Pure/Button/button.js';
import Footer from '../Pure/Footer/footer.js';
import Preloader from '../Pure/Preloader/preloader.js'

const HeaderImageSize = 40

export default class MainMenu extends React.Component{
	constructor(props){
		super(props);

		this.state={
			socket:this.props.socket,
			loading: true,
			concerts:[],
		};
	}

	componentDidMount() {
		this.state.socket.emit('getUserConcerts',{});

		this.state.socket.on('userConcerts',data=>{
			this.setState({
				concerts:data,
				loading: false
			});
		});
	}

	changeToBrowse = () => {
		this.props.router.push.Browse({
			socket:this.state.socket,
		},
		{type:'none'});
	}

	goToConcert = (concertId, emoji) => {
		this.props.router.push.Concert({
			socket:this.state.socket,
			token:this.state.token,
			concertId:concertId,
			emoji:emoji
		});
	}

	goToProfile = () => {
		this.props.router.push.Profile({
			socket:this.state.socket
		});
	}

	monthName(index) {
		switch (index) {
			case 0: return 'January'
			case 1: return 'February'
			case 2: return 'March'
			case 3: return 'April'
			case 4: return 'May'
			case 5: return 'June'
			case 6: return 'July'
			case 7: return 'August'
			case 8: return 'September'
			case 9: return 'October'
			case 10: return 'November'
			case 11: return 'December'
		}
		return 'Unknown'
	}

	format(str) {
		str = str + ''
		while (str.length < 2)
			str = '0' + str
		return str
	}

	formatDate(str) {
		const date = new Date(str)
		return this.format(date.getDate()) + " " + this.monthName(date.getMonth())
			+ " " + this.format(date.getHours()) + ":" + this.format(date.getMinutes())
	}

	render(){
		return (
			<View style={styles.Page}>
				<View style={styles.Concerts}>
					<ScrollView style={styles.ScrollView}>
						<View style={styles.HeaderView}>
							<ImageBackground style={{
								width: HeaderImageSize, 
								height: HeaderImageSize
							}} source = {require('../../images/calendar.png')}>
							</ImageBackground>
							<View style = {{
								height: HeaderImageSize,
								flexDirection: 'column',
								justifyContent: 'space-around'
							}}>
								<Text style={styles.Heading}>Ваш список</Text>
							</View>
						</View>
						{this.state.loading && <Preloader />}
						{this.state.concerts.map((concert,index)=>{
							return (
								<View key={index} style={styles.Concert}>
									<View style={styles.IconWrapper}>
										<Image source={{
											uri:concert.poster,
										}}
										style={styles.Icon}/>
									</View>
									<View style={styles.Info}> 
										<Text style={styles.Name}>{concert.label}</Text>
										<Text style={styles.Address}>{concert.address}</Text>
										<Text style={styles.Date}>{this.formatDate(concert.date)}</Text>
										<View style={styles.ButtonHere}>
										{	concert.isActive ?
										 <Button style={styles.Button} onClick={
										 	()=>this.goToConcert.call(this,concert._id,concert.emoji)}>
										 	<Text style={styles.ButtonText}>Я тут</Text>
										 </Button> :
										 undefined
										}
										</View>
									</View>
								</View>
							);
						})}
					</ScrollView>
				</View>
				<Footer active='Concerts'
				Concert={()=>{}}
				Quit={this.props.router.pop}
				Add={this.changeToBrowse}
				Profile={this.goToProfile}/>
			</View>
		);
	}
}