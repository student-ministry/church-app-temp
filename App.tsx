import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button, ScrollView, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>Hello {this.props.name}!</Text>
        <GreetingV2 nameV2='Nice to meet you!' />
        <Blink text="Let's blink" />
      </View>
    );
  }
}

function GreetingV2(prop){
  return <Text>Greetings, {prop.nameV2}</Text>
} 

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 2000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.bigBlue}>{this.props.text}</Text>
    );
  }
}

class MyAppHeaderText extends Component {
  render(){
    return (
      <Text style={styles.titleText}>{this.props.children}</Text>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.',
      text: '',
    };
  }

  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

  render() {
    return (
      <ScrollView>
        <Greeting name='Jack Johnson' />
        <Greeting name='Bruce' />
        <Greeting name='Yeet!!!' />
        <GreetingV2 nameV2='Youpeng' />
        <Blink text='I love to blink' />
        
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>

        <Text style={styles.red}>
          I am red 
          <Text style={styles.bigBlue}> and bigBlue</Text>
        </Text>

        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
        </Text>

        <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

        <TextInput 
          style={{height: 50}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map(word => word&&'🍕').join(' ')}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>{
              alert('Nice!')
            }}
            title="Press Me"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button 
            onPress={()=>{
              alert('One!')
            }}
            title="one"
            color="#841584"
          />
          <Button 
            onPress={()=>{
              alert('Two!')
            }}
            title="two"
            color="#341584"
          />
          <Button 
            onPress={()=>{
              alert('Three!')
            }}
            title="three"
            color="#8484"
          />
        </View>

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  baseText: {
    // fontFamily: 'Farah',
    fontStyle: 'italic',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
