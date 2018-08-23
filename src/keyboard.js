import React from 'react';
import ReacDOM from 'react-dom';
import './style/keyboard/keyboard.css';

import Button from './button.js';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.theStyle = {
            gridColumn:props.gridColumn,
            gridRow:props.gridRow
        }
    }
    
    render() {

        return (
            <div className="keyboard" style={this.theStyle}>
                {/*Number buttons*/}
                <Button theValue="0" gridColumn="2/3" gridRow="4/5"/>
                <Button theValue="1" gridColumn="1/2" gridRow="3/4"/>
                <Button theValue="2" gridColumn="2/3" gridRow="3/4"/>
                <Button theValue="3" gridColumn="3/4" gridRow="3/4"/>
                <Button theValue="4" gridColumn="1/2" gridRow="2/3"/>
                <Button theValue="5" gridColumn="2/3" gridRow="2/3"/>
                <Button theValue="6" gridColumn="3/4" gridRow="2/3"/>
                <Button theValue="7" gridColumn="1/2" gridRow="1/2"/>
                <Button theValue="8" gridColumn="2/3" gridRow="1/2"/>
                <Button theValue="9" gridColumn="3/4" gridRow="1/2"/>

                {/*Plus, Sub, Mult, Div accounts buttons*/}
                <Button theValue="/" gridColumn="4/5" gridRow="1/2" backgroundColor="grey" textColor="#ffffff"/>
                <Button theValue="x" gridColumn="4/5" gridRow="2/3" backgroundColor="grey" textColor="#ffffff"/>
                <Button theValue="-" gridColumn="4/5" gridRow="3/4" backgroundColor="grey" textColor="#ffffff"/>
                <Button theValue="+" gridColumn="4/5" gridRow="4/5" backgroundColor="grey" textColor="#ffffff"/>

                {/*Equal and Clear buttons*/}
                <Button theValue="=" gridColumn="3/4" gridRow="4/5" backgroundColor="orange" textColor="#ffffff"/>
                <Button theValue="C" gridColumn="1/2" gridRow="4/5" textColor="#000000"/>
            </div>
        );
    }
}