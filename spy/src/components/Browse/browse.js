import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from "./browsestyle.js";
import Button from '../Pure/Button/button.js';
import Footer from '../Pure/Footer/footer.js';
import Preloader from '../Pure/Preloader/preloader.js'

const HeaderImageSize = 40

export default class Browse extends React.Component{
	constructor(props){
		super(props);
		this.state={
			socket:this.props.socket,
			loading: true,
			concerts:[/*{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				posterRef:'https://avatars.mds.yandex.net/get-pdb/49816/e764985b-dfc4-4b9a-b963-922db68dd7d6/s1200',
				artistNames:['kek','cheburek','lol','arbidol']
			},
			{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				posterRef:'http://kek',
				artistNames:['kek','cheburek','lol','arbidol']
			}*/],
		};
	}

	componentDidMount() {
		this.state.socket.emit('getAllConcerts', {});
		this.state.socket.on('allConcerts',data=>{
			this.setState({
				concerts:data,
				loading: false
			});
		})
	}

	changeToCollection = () => {
		this.state.socket.emit('getUserConcerts',{});
		this.props.router.pop({type:'none'});
	}

	AddConcert = (concertId) => {
		this.state.socket.emit('addToSchedule', concertId);
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
								<Text style={styles.Heading}>Все концерты</Text>
							</View>
						</View>
						{this.state.loading && <Preloader />}
						{this.state.concerts.map((concert,index)=>{
							if(index>15)
								return undefined;

							return (
								<View key={index} style={styles.Concert}>
									<View style={styles.IconWrapper}>
										<Image 
										source={{
											uri:concert.poster
										}}
										style={styles.Icon}/>
									</View>
									<View style={styles.Info}> 
										<Text style={styles.Name}>{concert.label}</Text>
										<Text style={styles.Address}>{concert.address}</Text>
										<Text style={styles.Date}>{this.formatDate(concert.date)}</Text>
										<View style={styles.ButtonHere}>
										<Button onClick={()=>this.AddConcert.call(this,concert._id)}>
										<Text>Добавить себе</Text></Button>
										</View>
									</View>
								</View>
							);
						})}
					</ScrollView>
				</View>
				<Footer active='Add'
				Concert={this.changeToCollection}
				Add={()=>{}}
				Quit={this.props.router.reset.Auth}
				Profile={this.goToProfile}
				/>
			</View>
		);
	}
}