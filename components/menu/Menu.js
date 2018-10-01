import React, { Component } from 'react'
import { TouchableOpacity, Image,  } from 'react-native';

import { Container, Header, Content, Footer, Card, CardItem, Body, Text, View} from 'native-base';
import styles from './Css';

export default class Menu extends Component {

  clickCard(){
    console.log('foi'); 
  }
  
  render() {
    return (
      <Container >
        <Header />

        <View style={styles.descriptionStudio}>
          <Text>Olá esse é o descritivo</Text>
          <Text>Olá esse é o descritivo</Text>
          <Text>Olá esse é o descritivo</Text>
          <Text>Olá esse é o descritivo</Text>
        </View>
        
        <Content style={styles.content}>

          <Card style={styles.card} >
            <CardItem button onPress={() => alert("This is Card Header")}>
              <Body>
                <Text style={styles.textCard}>
                   Agendamentos
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem button onPress={() => alert("This is Card Header")}>
              <Body>
                <Text style={styles.textCard}>
                   Fidelidade
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem button onPress={() => alert("This is Card Header")}>
              <Body>
                <Text style={styles.textCard}>
                   Funcionarios
                </Text>
              </Body>
            </CardItem>
          </Card>

        </Content>

        <Footer />
      </Container>
    );
  }
}
