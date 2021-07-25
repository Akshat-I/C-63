import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import dictionary from "./localdb";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word:[],
      lexicalCategory:[],
      definition:[]
    };
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Dictionary',
            style: { color: '#fff', fontSize: 30 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ 
              word : dictionary[this.state.text].word,
              lexicalCategory : dictionary[this.state.text].lexicalCategory,
              definition : dictionary[this.state.text].definition 
              });
          }}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
         <View>
         {this.state.word.map(item=>{
          return (
            <Text style={styles.displayWord}>{item}</Text>
          )
        })}
        {this.state.lexicalCategory.map(item=>{
          return (
            <Text style={styles.displayType}>{item}</Text>
          )
        })}
        {this.state.definition.map(item=>{
          return (
            <Text style={styles.displayDefinition}>{item}</Text>
          )
        })}</View>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  inputBox: {
    marginTop:30,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 5,
    backgroundColor:"#fff"
  },
  goButton: {
    width: 170,
    height: 40,
    alignSelf: 'center',
    padding: 10,
    margin: 20,
    backgroundColor:"blue",
    borderRadius:30
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    margin:-6,
    color:"white"
  },
  displayWord: {
    textAlign: 'center',
    fontSize: 25,
    marginTop:30,
    backgroundColor:"red"
  },
  displayType: {
    textAlign: 'center',
    fontSize: 25,
    marginTop:25,
    backgroundColor:"lime"
  },
  displayDefinition: {
    textAlign: 'center',
    fontSize: 18,
    marginTop:25,
    backgroundColor:"yellow"
  }
});
