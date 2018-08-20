import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import NoteTemplate from './components/NoteTemplate';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
        <NoteTemplate/>
        </Card>
        <Card>
          <NoteTemplate/>
        </Card>
          <Card>
              <AssetExample/>
          </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});
