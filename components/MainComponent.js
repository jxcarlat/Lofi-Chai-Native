import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { TEAS } from '../shared/teas';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teas: TEAS
        };
    }

    render() {
        return <Directory teas={this.state.teas} />;
    }
}

export default Main;