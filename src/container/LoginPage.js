import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Sae } from 'react-native-textinput-effects';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
        <Ionicons name = "logo-android" size = {100} color = {'black'} style = {{bottom:"10%"}} />
        <View>
          <TextInput
          style= {styles.inputText}
          placeholder = "Email Adresiniz"
          onChange= {(text) => this.setState({email:text})}
          value={this.state.email}/>
          <TextInput
          style= {styles.inputText}
          placeholder = "Şifreniz"
          secureTextEntry
          onChange= {(text) => this.setState({password:text})}
          value={this.state.password}/>
          
        </View>
        <TouchableOpacity
        style = {{backgroundColor:'lightgray'}}>
          <View
          style = {{flexDirection:'row', alignItems:'center'}}>
              <Text style={{ color: 'green', marginEnd: '3%' }}>Giriş Yap</Text>
              <AntDesign name="login" size={35} />
            </View>
          </TouchableOpacity>

          <View style = {{justifyContent:'center', alignItems:'center', flexDirection:'row', marginTop:'3%'}}>
            <Text>Üye değil misiniz? </Text>
            <TouchableOpacity>
              <Text style ={{color:'red'}}>KAYIT OL!</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText : {
    width:300, 
    backgroundColor:'lightgray', 
    marginBottom:'1%',
    borderRadius:50,
    textAlign:'center'
  }
});
