import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

export default class BHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.HeaderBar}>
                <View style={styles.Bar}>
                    <TouchableOpacity
                    onPress={()=> this.props.goBack()}>
                        <Entypo name="chevron-left" size={30} color="black" style={styles.Arrow} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    HeaderBar: {
        backgroundColor: 'lightgray',
        height: '6%',
        flexDirection: 'row',
    },
    Arrow: {

    },
    Bar: {
        justifyContent: 'center'
    }
});
