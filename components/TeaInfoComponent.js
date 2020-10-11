import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TEAS } from '../shared/teas';

function RenderTea({tea}) {
    if (tea) {
        return (
            <Card
                featuredTitle={tea.header}
                image={require('./images/black-tea.jpg')}>
                <Text style={{margin:10}}>
                    {tea.caption}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class TeaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teas: TEAS
        };
    }

    static navigationOptions = {
        title: 'Tea Information'
    }

    render() {
        const teaId = this.props.navigation.getParam('teaId');
        const tea = this.state.teas.filter(tea => tea.key === teaId)[0];
        return <RenderTea tea={tea} />;
    }
}

export default TeaInfo;