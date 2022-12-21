import React from "react";
import {ConditionalDisplay} from "../cond-display/cond-display"

//React is component based.Each component is a separate concern. Think of component as simple functions in programming.
//function components / class components
//props: are explicity, similar to HTML attributes
//state: is internal, state can be changed, props can't.

//All react components must act like pure functions with respect to received props.
//elements that represent DOM tags are written in lower-case.
//user-defined elements/components must be an identifier starting with a capital letter.




//functional component
export function Sum(props) {
    return (
        <div>
            <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
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





//Class syntax: this syntax has some additional features, we may need occasionally.

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