import React from "react";
import {ConditionalDisplay} from "../cond-display/cond-display"




//functional component
export default function Sum(props) {
    return (
        <div>
            <h5>Function components</h5>
            <Hello now={new Date().toDateString()}></Hello>
            <p>{props.a} + {props.b} = {props.a + props.b}</p>
            <Events />
        </div>

    )
}
//sub element
function Events(props) {
    const clickHandler = console.log; //when its just delgating
    return (
        <ConditionalDisplay isVisible={true}>
        <button className="btn btn-info" onClick={clickHandler} >
            Make an event
        </button>
        </ConditionalDisplay>
    )
}


//sub element
function Hello(props){
    return <small>Hello at {props.now}</small>
}


//class style
 class Sum1 extends React.Component {

    render() {
        return(   
            <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>           
        )      
    }
}