import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {styles} from "./mainmenustyle.js";
import Button from '../Pure/Button/button.js';


export default class MainMenu extends React.Component{
	constructor(props){
		super(props);

		this.state={
			token:this.props.token,
			socket:this.props.socket,
			concerts:[{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				poster:'https://avatars.mds.yandex.net/get-pdb/49816/e764985b-dfc4-4b9a-b963-922db68dd7d6/s1200',
				artistNames:['kek','cheburek','lol','arbidol'],
				isActive:true,
			},
			{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				poster:'https://avatars.mds.yandex.net/get-pdb/231404/9816eb13-88cc-4590-94aa-c50aaae9d05e/s1200',
				artistNames:['kek','cheburek','lol','arbidol']
			},
			{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				posterRef:'https://avatars.mds.yandex.net/get-pdb/234183/a754609d-5960-496c-8283-6a90516180d8/s1200',
				artistNames:['kek','cheburek','lol','arbidol']
			}],
		};
	}

	componentDidMount() {
		this.state.socket.emit('getUserConcerts',{});

		this.state.socket.on('userConcerts',data=>{
			this.setState({
				concerts:data
			});
		});
	}

	changeToBrowse = () => {
		this.props.router.push.Browse({
			socket:this.state.socket,
			token:this.props.token,
		});
	}

	goToConcert = (concertId, emoji) => {
		this.props.router.push.Concert({
			socket:this.state.socket,
			token:this.state.token,
			concertId:concertId,
			emoji:emoji
		});
	}

	render(){
		return (
			<View style={styles.Page}>
				<View style={styles.Concerts}>
					<ScrollView style={styles.ScrollView}>
						{this.state.concerts.map((concert,index)=>{
							return (
								<View key={index} style={styles.Concert}>
									<View style={styles.Icon}>
										<Image source={{
											uri:concert.poster,
										}}
										style={styles.Icon}/>
									</View>
									<View style={styles.Info}> 
										<Text>{concert.label}</Text>
										<Text>{concert.address}</Text>
										<Text>{concert.date}</Text>
										<View style={styles.ButtonHere}>
										{	concert.isActive ?
										 <Button onClick={
										 	()=>this.goToConcert.call(this,concert._id,concert.emoji)}>
										 	<Text>Я тут</Text>
										 </Button> :
										 <Text></Text>
										}
										</View>
									</View>
								</View>
							);
						})}
					</ScrollView>
				</View>
				<View style={styles.Footer}>
					<TouchableOpacity onPress={() => this.changeToBrowse()} 
					style={styles.BrowseButton}>
						<Text style={styles.BrowseButtonText}>
						Browse</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}