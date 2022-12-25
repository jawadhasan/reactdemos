import React from 'react';

//child elements are created dynamically and are dependent on the state value of an array maintained by the component. 
//Each element of the array can be modified directly with its own corresponding interface, 
//which is automatically bound to the state by passing the index value to the event handler. 
//As a challenge, try to work with an array of objects instead of an array of strings in order to create 
//more complex nested array bound elements!

export default class DynamicTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            items: []
        }

    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleClick() {
        var items = this.state.items;

        items.push(this.state.message);

        this.setState({
            items: items
        });
    }

    renderRows() {

        var context = this;
        //A separate context variable is used to reference this since within the nested returns, 
        //you'll need to refer to the instance of the DynamicTable component to bind event handlers to input and button below.



        return (
            this.state.items.map(function (o, i) {
                return (
                    <tr key={`item-${i}`}>
                        <td><input type="text" value={o} onChange={context.handleItemChanged.bind(context, i)}></input></td>
                        <td><button onClick={context.handleItemDelete.bind(context, i)}>Delete</button></td>
                    </tr>
                )
            })
        )
    }


    //To modify each element in items within the input of each table row, 
    //you'll have to create an event handler that knows which index in the array should be updated:
    handleItemChanged(i, event) {
        var items = this.state.items;
        items[i] = event.target.value;
        this.setState({
            items: items
        });
    }

    handleItemDelete(i) {
        var items = this.state.items;

        items.splice(i, 1);

        this.setState({
            items: items
        });
    }


    render() {

        return (
            <div>
                <h3>Editable Table</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* To render the items in the table, create a separate function that returns rendered JSX: */}
                        {this.renderRows()}
                    </tbody>
                </table>

                {/* Data Entry */}
                <hr />
                <input type="text" onChange={this.updateMessage.bind(this)} />
                <button onClick={this.handleClick.bind(this)}>
                    Add Item
                </button>

            </div>
        );
    }
}