import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
  return (
    <View style={ styles.container }>
      <View style={ styles.coreMines } />
      <View style={ styles.line } />
      <View style={ [styles.lines, { transform: [{ rotate: '45deg' }] }] } />
      <View style={ [styles.lines, { transform: [{ rotate: '90deg' }] }] } />
      <View style={ [styles.lines, { transform: [{ rotate: '135deg' }] }] } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  coreMines: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignContent: 'center'
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black'
  }
})