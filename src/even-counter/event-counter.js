
import React from "react";
export class EventCounter extends React.Component{

    //ctor
    constructor(props){
        super(props);

        this.state = {clicks:0},
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        
        const clickNew = this.state.clicks+1;
        this.setState({clicks: clickNew});
        if(clickNew % 2 === 0){
            this.props.onEvenClick(clickNew);
        }
    }


    render(){
        return <div onClick={this.clickHandler}>
            Clicked {this.state.clicks} times.            
        </div>
    }
}