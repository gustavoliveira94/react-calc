import React from 'react';
import ReactDOM from 'react-dom';
import './style/normalize.css';
import './style/index.css';

import Screen from './screen.js';
import Keyboard from './keyboard.js';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {number : "10"};
    }

    theChange(number) {
        this.setState({number});
    }

    render() {
        return (
            <div className="main">
                <Screen theValue={this.state.number} gridColumn="1/3" gridRow="1/2"/>
                <Keyboard gridColumn="1/3" gridRow="2/3"/>
            </div>
        );
    }
}

const app = document.getElementById('root');

ReactDOM.render(<Main/>,app);