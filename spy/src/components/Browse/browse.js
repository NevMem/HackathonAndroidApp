import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from "./browsestyle.js";
import Button from '../Pure/Button/button.js';



export default class Browse extends React.Component{
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
			},
			{
				_id:"5c95ab56d589e13c609ddce1",
				label:"Кай Метов",
				date:"2019-03-23T16:00:00.000Z",
				address:"Дворец культуры и техники имени И.И. Газа",
				location:{"latitude":59.87866,"longitude":30.26288},
				posterRef:'http://kek',
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
			}],
		};
	}

	componentDidMount() {
		this.state.socket.emit('getAllConcerts', {});
		this.state.socket.on('allConcerts',data=>{
			this.setState({
				concerts:data
			});
		})
	}

	changeToCollection = () => {
		this.props.router.pop();
	}

	AddConcert = (concertId) => {
		console.log(concertId);
		this.state.socket.emit('addToSchedule', concertId);
	}

	render(){
		return (
			<View style={styles.Page}>
				<View style={styles.Header}>
					<TouchableOpacity onPress={() => this.changeToCollection()}>
						<Text style={styles.BrowseButtonText}>Back</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.Concerts}>
					<ScrollView style={styles.ScrollView}>
						{this.state.concerts.map((concert,index)=>{
							if(index>15)
								return undefined;

							return (
								<View key={index} style={styles.Concert}>
									<View style={styles.Icon}>
										<Image 
										source={{
											uri:concert.poster
										}}
										style={styles.Icon}/>
									</View>
									<View style={styles.Info}> 
										<Text>{concert.label}</Text>
										<Text>{concert.address}</Text>
										<Text>{concert.date}</Text>
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
			</View>
		);
	}
}