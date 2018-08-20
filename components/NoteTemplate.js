import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

export default class NoteTemplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.code}
        placeholder="The mic"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
