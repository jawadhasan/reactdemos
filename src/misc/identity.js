import React from "react";

export class Identity extends React.Component{
    
    constructor(){
        super();

        this.myDiv = React.createRef();
    }

    componentDidMount(){

        //this is not escaped
        this.myDiv.current.innerHTML += "<br /> Set on the wrapped DOM element <strong>Unsafe</strong> [not escaped]"
    }

    render(){
        
        return <div ref={this.myDiv}>

            {/* this is escaped */}
            {"Set in render <strong>Safe</strong> [escaped]"} 
        </div>
    }
}