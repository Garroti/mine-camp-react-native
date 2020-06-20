import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import params from './src/params'

export default class App extends Component {
  render(){
    return (
      <View styles={ styles.container }>
        <Text style={ styles.welcome }>Iniciando o Mines!</Text>
        <Text style={ styles.instructions }>
          Tamanho da Grade: { params.getRowsAmount() }x{ params.getColumnsAmount() }
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {

  },
  instructions: {

  }
});
