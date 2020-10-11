import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TEAS } from '../shared/teas';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teas: TEAS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.header}
                    subtitle={item.caption}
                    onPress={() => navigate('TeaInfo', { teaId: item.key })}
                    leftAvatar={{ source: require('./images/black-tea.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.teas}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.key}
            />
        );
    }
}

export default Directory;