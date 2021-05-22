import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends Component {
  state = { 
    counters : [
        {id : 1, value: 0},
        {id : 2, value: 0},
        {id : 3, value: 0},
        {id : 4, value: 0},
    ]
  };

  handleDelete = id => {
    const counters = this.state.counters.filter( c => c.id !== id);
    this.setState( { counters } ); 
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      console.log(counters);
      this.setState( { counters }); 
      console.log(this.state.counters);
  }
  render() {
  return (
    <React.Fragment>
      <NavBar
        totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
      <Counters
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}/>
    </React.Fragment>
  );
}
}
 
export default App;


