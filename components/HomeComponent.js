import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { TEAS } from '../shared/teas';
import { ROOMS } from '../shared/rooms';
import { EVENTS } from '../shared/events';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.header}
                image={require('./images/black-tea.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.caption}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teas: TEAS,
            rooms: ROOMS,
            events: EVENTS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.teas.filter(tea => tea.featured)[0]} />
                <RenderItem 
                    item={this.state.events.filter(event => event.featured)[0]} />
                <RenderItem 
                    item={this.state.rooms.filter(room => room.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;