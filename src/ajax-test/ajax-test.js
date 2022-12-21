import React from "react";


const TableHeader = (props) => {
    let thTags = [];
    let headers = props.tableheaders.split(' ');

    for (let i = 0; i < headers.length; i++) {
        // console.log(headers[i]);
        thTags.push(<th key={i}>{headers[i]}</th>);
    }

    return (
        <thead>
            <tr>
                {thTags}
            </tr>
        </thead>
    );
}
const TableRow = (props) => {
    const row = props.row;
    return (
        <tr key={row.id}>
            {/* <td>{row.id}</td> */}
            <td>{row.email}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.registeredAt}</td>
            <td><button className="btn btn-danger" data-letter={row.id} onClick={props.removeTableItem}>Delete</button></td>
        </tr>
    );

}
const TableBody = (props) => {
    const rows = props.tableData.map((row, index) => {
        return (
            <TableRow key={index} row={row} removeTableItem={props.removeTableItem} />
        )
    })

    return <tbody>{rows}</tbody>

}


export const Table = (props) => {

    return (
        <table className="table">
            <TableHeader tableheaders={props.tableHeaders} />
            <TableBody tableData={props.tableData} removeTableItem={props.removeTableItem} />
        </table>
    );
}
// Wrong
//this.state.comment = 'Hello';

// Correct
//this.setState({comment: 'Hello'});

export class AjaxTest extends React.Component {


    //ctor
    constructor(props) {

        super(props);
        this.state = {
            posts: [],
            comments: [],
            users: []
        };

        this.endpoint = "https://rqjmvfm8l5.execute-api.eu-central-1.amazonaws.com/Prod/api/users";

        //What on earth is the point of ES6 classes if their methods don't have proper lexical this binding,
        //and then don't even expose a syntax for binding their context directly on their definition!?
        this.getUsers = this.getUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

    }

    componentDidMount(){

        //load users at starteup
        this.getUsers();
    }

    AddUser() {


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
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data
                })
            });

    }




    componentDidMount22() {
        fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }

    getUsers() {

        const requestData = {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        }      

        //ajax Call
        fetch(this.endpoint, requestData)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    users: data
                })
            });
    }



    deleteUser(e) {

        let id = e.target.dataset.letter;
        let deleteURL = `${this.endpoint}/${id}`;
        

        const requestData = {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        }
        
          //ajax Call
          fetch(deleteURL, requestData)
          .then(res => res.text())
          .then(data => {
              console.log(data);
             this.getUsers(); //reload users
          });

        
    }

    render() {
        return (
            <div>
                <h4>Ajax - FetchAPI</h4>
                <button className="btn btn-primary" onClick={this.getUsers}>Get Users</button>
                <button disabled onClick={this.AddUser}>Post</button>

                <Table tableHeaders="Email First-Name Last-Name Registered-At Actions" tableData={this.state.users} removeTableItem={this.deleteUser}></Table>
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