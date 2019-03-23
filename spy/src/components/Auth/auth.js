import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
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
		socket = io(server.address);

		socket.on('token', token => {
			this.props.router.MainMenu.push({
				token:token,
				socket:socket,
			});
		});

    	this.GetToken()
    	.then(value=>{
      		if(value!==null){
        		this.setState({
          			token:value
        		});
        		socket.send('token',{token:token});
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
  		let token = 'kek';
  		socket.send('login',{
  			login:this.state.login,
  			password:this.state.password,
  		});

      this.SetToken(JSON.stringify({
        login:login,
        password:password
      }));

  		/*this.props.router.push.MainMenu({
  			token:token,
  			socket:socket
  		});*/

  		this.clearForm();
  	}

  	render() {
  		return(
				<ImageBackground 
					source={require('../../images/Auth.jpg')} 
					style={{width: '100%', height: '100%'}}
				>
					<View style={styles.Auth}>
							<Text style={styles.H1}>Вход</Text>
							<View style={styles.socialContainer}>
								<TouchableOpacity style={styles.Social}>
									<Image source={require('../../images/socNet/f.png')}/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.Social}>
									<Image source={require('../../images/socNet/g.png')}/>
								</TouchableOpacity>
								<TouchableOpacity style={styles.Social}>
									<Image source={require('../../images/socNet/v.png')}/>
								</TouchableOpacity>
							</View>
							<Text style={styles.Span}>or use your account</Text>
							<Input 
								type="email" 
								placeholder="Почта"
								onChangeText={this.handleInputLogin}
								value={this.state.login}
							/>
							<Input
								type="password"
								placeholder="Пароль"
								onChangeText={this.handleInputPassword}
								value={this.state.password}
							/>
							<Text href="#">Забыли пароль?</Text>
							<View style={styles.ButtonAuth}>
								<Button onClick={this.handleSubmit}>
									<Text>Вход</Text>
								</Button>
							</View>
						{/* <Input placeholder="Введите логин"
						onChangeText={this.handleInputLogin}
						value={this.state.login}/>
						<Input placeholder="Введите пароль"
						onChangeText={this.handleInputPassword}
						value={this.state.password}/>
						<View style={styles.ButtonAuth}>
							<Button onClick={this.handleSubmit}>
								<Text>Auth</Text>
							</Button>
						</View> */}
					</View>
  	  	</ImageBackground>
  		);
  	}
}