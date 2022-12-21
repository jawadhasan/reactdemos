import React from "react";
export function ConditionalDisplay(props){
    return (
        <div>
            {props.isVisible ? props.children:null}
        </div>
    )
}