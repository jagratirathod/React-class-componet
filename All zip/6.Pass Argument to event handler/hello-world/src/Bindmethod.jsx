import React, { Component } from 'react';

class Bindmethod extends Component {
    //state without  constructor
    state = {                                                      //Pass argument using  object 
        id: 1,
        name: "riya",
        roll: "108"
    };

    //Event handler arrrow function
    handleClick = (id, e) => {
        console.log(id);
        console.log(e);


    };

    handleClickArg = (e) => {
        this.handleClick(this.state.id, e);                          
    }

    
    render() {
        return (
            <div>
                <h1>Hello greeky</h1>
                <h2>Hello , {this.state.name} your roll no. is {this.state.roll}</h2>

                <button onClick={this.handleClick.bind(this,this.state.id)}> Delete</button>

            </div>
        );
    }
}


export default Bindmethod;




