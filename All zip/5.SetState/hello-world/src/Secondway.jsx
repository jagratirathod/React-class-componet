import React, { Component } from 'react';

class Secondway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "riya",
            roll: this.props.roll
        };
    }

    handleClick = () => {
        this.setState(function(state,props){
            console.log(props.roll);

        }
        );
    };

    render() {
        return (
            <div>
                <h1>Hello greeky</h1>
                <h2>Hello , {this.state.name} your roll no. is {this.state.roll}</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
            );
        }
    }
    export default   Secondway;




