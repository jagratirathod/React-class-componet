import React, { Component } from 'react';

class Passargument extends Component {
        //state without  constructor
        state = {
            id:1,
            name: "riya",
            roll: "108"
        };
    
    //Event handler arrrow function
    handleClick = (id) => {
            console.log(id);

        };

    handleClickArg = () =>{
        this.handleClick(this.state.id);
    }


    render() {
        return (
            <div>
                <h1>Hello greeky</h1>
                <h2>Hello , {this.state.name} your roll no. is {this.state.roll}</h2>
                <button onClick={this.handleClickArg}>Click me</button>
            </div>
            );
        }
    }


    export default   Passargument;




