import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Sae } from 'react-native-textinput-effects';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user:null,
      loading: true,
    };
  }

  goToLogin() {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account signed in!');
        this.props.navigation.navigate('MainPage')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  handleMail(text) {
    this.setState({ email: text })
  }
  handlePassword(text) {
    this.setState({ password: text })
  }


  onAuthStateChanged(user) {
    this.setState({ user: user });
    if (this.state.initializing) {
      this.setState({ initializing: false })
    }
  }

  componentDidMount() {
    this.execAuth()
  }

  execAuth(){
    auth().onAuthStateChanged((user) => {
      this.setState({ loading: false, user });
    });
  }



  render() {

    
    if (this.state.loading) {return null;}
    if(this.state.user != null){
      this.props.navigation.navigate("MainPage")
    }



    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="logo-android" size={100} color={'black'} style={{ bottom: "10%" }} />
        <View>
          <TextInput
            style={styles.inputText}
            placeholder="Email Adresiniz"
            onChangeText={(text) => this.setState({ email: text })}/>
          
          <TextInput
            style={styles.inputText}
            placeholder="Şifreniz"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}/>

        </View>
        
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => this.goToLogin()}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ color: 'green', marginEnd: '3%' }}>Giriş Yap</Text>
            <AntDesign name="login" size={35} />
          </View>
        </TouchableOpacity>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '3%' }}>
          <Text>Üye değil misiniz? </Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('RegisterPage')}>
            <Text style={{ color: 'red' }}>KAYIT OL!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    width: 300,
    backgroundColor: 'lightgray',
    marginBottom: '1%',
    borderRadius: 50,
    textAlign: 'center'
  },

  LoginButton:{
    backgroundColor: 'lightgray',
    borderRadius:60,
  }
});
