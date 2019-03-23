import {View, Text, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import React from 'react';
import Router from 'react-native-easy-router';
import Input from '../Pure/TextInput/textinput.js';
import Button from '../Pure/Button/button.js';
import {styles} from './authstyle.js';
import io from 'socket.io-client';

import server from '../../../server.json';

let socket;

export default class Auth extends React.Component {
	constructor() {
		super();
		this.state={
			login:'',
			password:''	
		};
	}

	async GetToken() {
	    try {
	      const value = await AsyncStorage.getItem('@concert:token');
	      return value;
	    } catch(error) {
	      console.log('Cant get token:' + error);
	    }
  	}

  	async SetToken(value) {
	    try {
	      await AsyncStorage.setItem('@concert:token', value);
	    } catch(error) {
	      console.log('Cant set token:' + error);
	    }
  	}

	componentDidMount() {
		socket = io.connect(server.address);

    socket.on('connect',()=>{
        console.log('connect');
      });

		socket.on('auth succeed', user => {
      console.log('kek');
			this.props.router.push.MainMenu({
				token:user.token,
				socket:socket,
        name:user.name,
        surname:user.surname,
			});
		});

    socket.on('auth failed', error => {
      console.log(error);
    });

    	this.GetToken()
    	.then(value=>{
      		if(value!==null){
        		socket.emit('token',JSON.parse(token));
      		}
    	});
  	}

  	handleInputLogin = text => {
  		this.setState({
  			login:text
  		});
  	}

  	handleInputPassword = text => {
  		this.setState({
  			password:text
  		});
  	}

  	validationForm() {
  		if(this.state.login.length < 6 || this.state.password.length < 6) {
  			return false;
  		}
  		return true;
  	}

  	clearForm() {
  		this.setState({
  			login:'',
  			password:''
  		});
  	}

  	handleSubmit = () => {
  		//if(!this.validationForm())
  		//	return;
  		//send
  		socket.emit('auth',{
  			login:this.state.login,
  			password:this.state.password,
  		});

      this.SetToken(JSON.stringify({
        login:this.state.login,
        password:this.state.password
      }));

  		this.props.router.push.MainMenu({
  			socket:socket
  		});

  		this.clearForm();
  	}

  	render() {
  		return(
        <ImageBackground source={require('../../images/Auth.jpg')} 
        style={{width: '100%', height: '100%'}}>
  	  		<View style={styles.Page}>
  	  			<View style={styles.Auth}>
  	  				<Input placeholder="Введите логин"
  	  				onChangeText={this.handleInputLogin}
  	  				value={this.state.login}/>
  	  				<Input placeholder="Введите пароль"
  	  				onChangeText={this.handleInputPassword}
  	  				value={this.state.password}/>
              <View style={styles.ButtonAuth}>
    	  				<Button onClick={this.handleSubmit}>
    	  					<Text>Auth</Text>
    	  				</Button>
              </View>
  	  			</View>
  	  		</View>
        </ImageBackground>
  		);
  	}
}