import React from 'react';
import ReactDOM from 'react-dom';
import './style/normalize.css';
import './style/screen/screen.css';

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.theStyle = {
            gridColumn:props.gridColumn,
            gridRow:props.gridRow
        }
        this.number = props.theValue;
    }

    render() {
        return (
            <div className="screen" style={this.theStyle}>
                <p>
                    <span>{this.number}</span>
                </p>
            </div>
        );
    }
}