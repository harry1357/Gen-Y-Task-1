import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      Name: '',
      Age: ''
   }
   handleName = (text) => {
      this.setState({ Name: text })
   }
   handleAge = (text) => {
      this.setState({ Age: text })
   }
   Details = (Name, Age) => {
      alert('My Name is ' + Name + ' and I am ' + Age  + ' years old.')
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#18E3D6"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age"
               placeholderTextColor = "#18E3D6"
               autoCapitalize = "none"
               onChangeText = {this.handleAge}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.Details(this.state.Name, this.state.Age)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#18E3D6',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#18E3D6',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})