import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base'
import personalSrc from '../../images/personal.png';
export default class Home extends Component {
  render() {
    return (
        <Container>
        <Content>
        <Card style={{flex: 0,borderRadius: 8}}>
            <CardItem style={{borderBottomColor: "#000000"}} bordered >
              <Left>
                <Body>
                  <Text>Matrix</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Image source={personalSrc} style={{height: 50, width: 50}}/>
                <Body>
                  <Text>Contact us to dicover how to be a Persuasive Communicator. Be trusted! Be influential!</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Contacts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}