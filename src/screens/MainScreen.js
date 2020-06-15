import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title,TabHeading, Icon, Text } from 'native-base';
import Tab1 from '../components/tabs/Home';
import Tab2 from '../components/tabs/Survey';
import Tab3 from '../components/tabs/History';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor:'#009387'}}>
            <Left style={{flex:1}}/>
            <Body style={{flex:3,justifyContent: 'center'}}>
                <Title style={{color: '#fff',alignSelf:'center'}}>HOME</Title>
            </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor: '#009387'}}><Icon name="home" /><Text style={{fontWeight: 'bold'}}>HOME</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#009387'}}><Icon name="ios-paper" /><Text style={{fontWeight: 'bold'}}>SURVEY</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#009387'}}><Icon name="calendar" /><Text style={{fontWeight: 'bold'}}> HISTORY</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}