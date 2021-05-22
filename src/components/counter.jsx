import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        value : this.props.counter.value, 
        tags : ["tag1", "tag2", "tag3"]
    };

    render() { 
        return (
            <React.Fragment>
                <h4> Counter #{ this.props.counter.id } </h4>
                <span className="badge badge-primary m-2"> { this.props.counter.value } </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary"> Increment </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id) } className="btn btn-danger bt-sm m-2"> Delete </button>
            </React.Fragment>
        );
    }
}
 
export default Counter;
