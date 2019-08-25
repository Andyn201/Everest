import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {

    render() {

        const props = this.props;

        return (
            <div id="main">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        )
    }
}
