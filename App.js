import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/Login';
import { Container } from 'native-base';
import Menu from './components/menu/Menu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Menu></Menu>
      </Container>
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
});
