/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Touchable } from '../../components';
import createMarkdownRenderer from 'rn-markdown'

const Markdown = createMarkdownRenderer()

export default class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      input: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const { input } = this.state
    return (
      <View style={styles.container}>
        <textarea value={input} style={styles.input} onChange={this.handleChange} />
        <Markdown markdownStyles={markdownStyles}>
          {input}
        </Markdown>

      </View>
    );
  }
}

const markdownStyles = {}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  input: {
    width: 400,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  output: {
    flex: 1,
    marginRight: 20
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
}
