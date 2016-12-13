import React, { Component } from 'react';

class Square extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}> { 
                this.props.value
            } </button>
        );
    }
}

export default Square;