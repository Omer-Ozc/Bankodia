import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BHeader from '../components/BHeader'


export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  goBack(){
    console.log("asda")
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <BHeader/>
      </View>
    );
  }
}
