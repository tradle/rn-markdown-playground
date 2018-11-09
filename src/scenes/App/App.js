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

import createMarkdownRenderer from 'rn-markdown'

const Markdown = createMarkdownRenderer()
const defaultInput = require('./silly-input')
const defaultMarkdownStyles = {
  heading1: {
    fontSize: 24,
    color: 'purple',
  },
  link: {
    color: 'darkblue',
  },
  mail_to: {
    color: 'orange',
  },
  text: {
    color: '#757575'
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
    this.state = {
      input: defaultInput,
      markdownStyles: defaultMarkdownStyles
    }
  }

  changeStyle(event) {
    try {
      this.setState({
        markdownStyles: JSON.parse(event.target.value)
      })
    } catch (err) {}
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const { input, markdownStyles } = this.state
    return (
      <View style={styles.container}>
        <textarea
          value={input}
          style={styles.input}
          onChange={this.handleChange} />
        <Markdown style={styles.output} markdownStyles={markdownStyles}>
          {input}
        </Markdown>
        <textarea
          value={prettify(markdownStyles)}
          onChange={this.changeStyle}
          style={styles.styleInput} />
      </View>
    );
  }
}

function prettify (obj) {
  return JSON.stringify(obj, null, 2)
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  input: {
    minWidth: 200,
    maxWidth: '50%',
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  output: {
    flex: 1,
    whiteSpace: 'pre'
  },
  styleInput: {
    width: 200
  }
}
