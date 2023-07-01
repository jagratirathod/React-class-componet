import React , {Component} from  "react";

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Reena" , 
            roll : this.props.roll
        };

    }
    
    render (){
            return (
                <h1> Hello , {this.state.name} and My Roll number is {this.state.roll}</h1>
            )
    }
    
}

export default  Student;    