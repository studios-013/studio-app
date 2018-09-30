import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native';

import { Container, Header, Content, Item, Input, Text, Label, Footer, View, Form  } from 'native-base';
import styles from './Css';

export default class Login extends Component {
  render() {
    return (
      <Container >
        <Header />
        
        <Content style={styles.content}>
          <Form>
            <View style={styles.viewImage}>
              <Image 
                style={{width: 280, height: 280, alignContent: "center", alignSelf: "center"}}
                source={require('../../imgs/barber.jpg')} />
            </View>

            <Item floatingLabel style={styles.item}>
              <Label>Username</Label>
              <Input />
            </Item>
s
            <Item floatingLabel style={styles.item}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>FAZER LOGIN</Text>
            </TouchableOpacity>
          </Form>
        </Content>

        <Footer />

      </Container>
    );
  }
}
