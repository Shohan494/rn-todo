// imports
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// importing the note class
import Note from './app/components/note'

export default class AwesomeProject2 extends Component {
  
  //creating the initial state or the state variables
  state = {
    noteArray: [ {"date": "test date", "note": "test note 1"}],
    noteText: '',
  }

  // adding notes method with current date
  // this function pushes the date and note into the state array 
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),'note':this.state.noteText});
      this.setState({noteArray:this.state.noteArray});
      this.setState({'noteText':''});
    }
  }

  // deleting a note
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray});
}

  render() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} 
        deleteMethod={ ()=> this.deleteNote(key) } />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headText}>-Notedown App-</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
            { notes }
        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity 
              onPress={this.addNote.bind(this)} 
              style={styles.addButton}>
              <Text style={styles.addButtonText}>
              +
              </Text>
            </TouchableOpacity>

          <TextInput 
          style={styles.textinput} 
          onChangeText={(noteText) => this.setState({noteText}) }
          value={this.state.noteText}
          placeholder="Take Note">
          </TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor:'#E91E63',
    height: 100,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headText: {
    color: '#333333',
    fontSize:30,
    fontWeight: 'bold',
    padding:20,
  },
  ScrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    bottom:100,
    left:0,
    right:0,
  },
  addButton:{
    backgroundColor:'#E92E64',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-45,
    zIndex:10,
  },
  addButtonText:{
    color:'#fff',
    fontSize:24,
  },
  textinput:{
    alignSelf:'stretch',
    color:'#000000',
    padding:15,
    paddingTop:56,
    backgroundColor:'#ffffff',
    borderTopWidth:22,
    borderTopColor:'#ededed',
    fontSize:30,
  }
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
