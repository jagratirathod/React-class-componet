import React, { Component } from 'react';

class PassArgwithobject extends Component {
        //state without  constructor
        state = {
            id:1,
            name: "riya",                                           //Pass argument using  object 
            roll: "108"
        };
    
    //Event handler arrrow function 
    handleClick = (id,e) => {
            console.log(id);
            console.log(e);


        };

        handleClickArg = (e) =>{
            this.handleClick(this.state.id,e);
    }


    render() {
        return (
            <div>
                <h1>Hello greeky</h1>
                <h2>Hello , {this.state.name} your roll no. is {this.state.roll}</h2>
                <button onClick={this.handleClickArg}> Delete</button>

            </div>
            );
        }
    }


    export default   PassArgwithobject;




