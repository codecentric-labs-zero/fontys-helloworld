/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { Card, Toolbar, ThemeProvider } from 'react-native-material-ui';

const MyCard = (props) => (<Card>
            <View style={{padding: 30}}>
              <Text style={styles.instructions}>
                {props.text}
              </Text>
            </View>
          </Card>)

export default class helloworld extends Component {
  render() {
    let sessions = ['10:00 - Welcome',
      '10:20 - Greeting',
      '10:40 - First set of presentations',
      '11:30 - Presentation "Mongo DB"',
      '12:00 - Lunch',
      '13:00 - Native App Development with React Native',
      '13:30 - Tour of the building',
      '14:30 - Closing'];

    return (
      <ThemeProvider>
        <ScrollView>
          <View style={styles.container}>
            <Toolbar centerElement={<Text style={styles.welcome}>Welcome to codecentric!</Text>} />
            {sessions.map((session, i) => <MyCard key={i} text={session}/>)}
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('helloworld', () => helloworld);
