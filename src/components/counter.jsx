import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        value : this.props.counter.value, 
        tags : ["tag1", "tag2", "tag3"]
    };

    render() { 
        // Argument destrucutring
        const { counter, onDelete, onIncrement } = this.props;
        return (
            <React.Fragment>
                <h4> Counter #{ counter.id } </h4>
                <span className="badge badge-primary m-2"> { counter.value } </span>
                <button onClick={() => onIncrement(counter)} className="btn btn-primary"> Increment </button>
                <button onClick={() => onDelete(counter.id) } className="btn btn-danger bt-sm m-2"> Delete </button>
            </React.Fragment>
        );
    }
}
 
export default Counter;
