import React, { Component } from "react";


class Student extends Component {
    handleClick() {
        console.log("Button clicked",this);                     // Regular function                
    }

        render(){
            return (
                <div>
                    <h1>Project</h1>
                    <button onClick={this.handleClick}> Click Me</button>
                </div>
            )
        }


    
// class Student extends Component {
    // handleClick = () =>{
    //     console.log("Button clicked");                         // arrrow function - has this fuction       
    // }

    // render(){
        //     return (
        //         <div>
        //             <h1>Project</h1>
        //             <button onClick={this.handleClick}> Click Me</button>
        //         </div>
        //     )
        // }

// class Student extends Component {
//     constructor(props){
//         super(props); 
//         this.state = {
//             name : "rahul" ,
//             roll : this.props.roll
//         };                                                                          //using construcor not done proper
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick()  {
//     console.log("Button clicked",this);                        
// }

//     render(){
//         return (
//             <div>
//                 <h1>Project</h1>
//                 <button onClick={this.handleClick}> Click Me</button>
//             </div>
//         )
//     }



// this - this point the current object ,at different place it react differnt. 

// export default Student;  