import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, Image, ScrollView, } from 'react-native';

export default class HomeScreen extends Component{

  constructor(props){
    super(props);
  }

  render() {
    return (

      <ScrollView style={{position:'relative', overflow:'scroll'}}>
        <View style={styles.container}>
          <Text>Hello,</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
});
