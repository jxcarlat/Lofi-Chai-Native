import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.header}
                subtitle={item.caption}
                leftAvatar={{ source: require('./images/black-tea.jpg')}}
            />
        )
    };
    return (
        <FlatList
            data={props.teas}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.key}
        />
    );
}

export default Directory;