import React from 'react';
import ReactDOM from 'react-dom';
import './style/button/button.css';


export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.theValue = props.theValue;
        this.theStyle = {
            gridColumn:props.gridColumn,
            gridRow:props.gridRow,
            backgroundColor:props.backgroundColor,
            color:props.textColor
        }
    }

    render() {
        return (
            <div className="button" style={this.theStyle}>
                <span>{this.theValue}</span>
            </div>
        );
    }
}