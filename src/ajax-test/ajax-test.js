import React from "react";

export class AjaxTest extends React.Component{    

    //ctor
    constructor(props){
        super(props);       
    }

    AddUser(){       
       

        const postBody = {
            email: "myreactemail@hexquote.com",
            firstName: "react-firstname",
            lastName: "react-lastname"
        }

        const requestData = {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postBody)
        }

        //use browser's fetch API
        fetch(this.endpoint, requestData)
        .then(res=> res.JSON())
        .then(data => {
            this.setState({
                data
            })
        });

    }

    getUsers(){
        const endpoint = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users";
        const requestData = {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }         
        }

        fetch(endpoint, requestData)
        .then(res=> res.json())
        .then(data => {
            console.log(data);

            // this.setState({
            //     data
            // })
        });

    }
    


    render() {
        return (
            <div>
                <h4>Ajax - FetchAPI</h4>
                <button className="btn btn-primary" onClick={this.getUsers}>Get Users</button>
                <button disabled onClick={this.AddUser}>Post</button>
                {/* <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form> */}
            </div>
        );
    }
}