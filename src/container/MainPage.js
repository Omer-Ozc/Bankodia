import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BHeader from '../components/BHeader';
import auth from '@react-native-firebase/auth';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  goBack() {

  }

  exit() {
    auth()
      .signOut()
      .then(() => this.goExit())
  }

  goExit(){
    console.log("çıkışa gidildi")
    this.props.navigation.navigate("LoginPage")
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.exit()}>
          <Text>ÇIKIŞ YAP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
