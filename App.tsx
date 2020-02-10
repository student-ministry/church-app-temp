import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      bodyText: 'This is not really a bird nest.'
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
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

        <View style={{width: 200, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
