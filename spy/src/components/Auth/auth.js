import {View, Text, TouchableOpacity, ImageBackground,
  Image, AsyncStorage, ToastAndroid} from 'react-native';
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
   // ToastAndroid.show("Ping " + server.address, ToastAndroid.LONG)

    socket.on('connect',()=>{ 
      //ToastAndroid.show("Conneted", ToastAndroid.LONG)
        this.GetToken()
        .then(value=>{
          if(value!==null){
            socket.emit('auth',JSON.parse(value));
           }
        });
      });

    socket.on('auth succeed', user => {
     // console.log('connect');
      this.props.router.push.Profile({
        token:user.token,
        socket:socket,
        name:user.name,
        surname:user.surname,
      });
    });

    socket.on('auth failed', error => {
      //console.log(error);
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
      if(this.state.login.length < 4 || this.state.password.length < 4) {
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
      if(!this.validationForm())
        return;

      this.SetToken(JSON.stringify({
        login:this.state.login,
        password:this.state.password
      }));

      socket.emit('auth',{
        login:this.state.login,
        password:this.state.password,
      });

      /*this.props.router.push.MainMenu({
        socket:socket
      });*/

      this.clearForm();
    }

    render() {
      return(
        <ImageBackground 
          source={require('../../images/Auth.png')} 
          style={{width: '100%', height: '100%'}}
        >
          <View style={styles.Auth}>
              <Text style={styles.H1}>Вход</Text>
              <View style={styles.SocialContainer}>
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
              <Text style={styles.Span}>или используйте свой аккаунт</Text>
              <View style={styles.Input}>
                <Input
                  type="email" 
                  placeholder="Почта"
                  onChangeText={this.handleInputLogin}
                  value={this.state.login}
                />
              </View>
              <View style={styles.Input}>
                <Input
                  type="password"
                  placeholder="Пароль"
                  onChangeText={this.handleInputPassword}
                  value={this.state.password}
                />
              </View>
              <Text href="#" style={styles.A}>Забыли пароль?</Text>
              <View style={styles.ButtonAuth}>
                <Button onClick={this.handleSubmit}>
                  <Text style={styles.EnterText}>Вход</Text>
                </Button>
              </View>
          </View>
        </ImageBackground>
      );
    }
}