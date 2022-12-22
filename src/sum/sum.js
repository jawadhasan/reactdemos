import React from "react";
import {ConditionalDisplay} from "../cond-display/cond-display"




//functional component
export function Sum(props) {
    return (
        <div>
            <Hello now={new Date().toString("dd.mm.yyyy hh:ss")}></Hello>
            <h4>{props.a} + {props.b} = {props.a + props.b}</h4>
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
    return <h4>Hello at {props.now}</h4>
}







//component life-cycle: React [class components] allows you to override lifecycle mothods
//mounting: constructor>ComponentWillMount>render>ComponentDidMount
//updating: CompponentWillReceiveProps>ShouldComponentUpdate>ComponentWillUpdate>render>ComponentDidUpdate

export class Sum1 extends React.Component {

    render() {
        return(   
            <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>           
        )      
    }
}