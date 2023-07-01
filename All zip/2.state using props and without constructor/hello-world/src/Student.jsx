import React , {Component} from  "react";

class Student extends Component{
    state = {
        name : "John" ,
        roll : this.props.roll,                          //without using constructor
    };

    render (){
            return (
                <h1> Hello , {this.state.name} and My Roll number is {this.state.roll}</h1>
            )
    }
    
}

export default  Student;    
