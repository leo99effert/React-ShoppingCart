import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 0, tags: ['tag1', 'tag2']},
      { id: 2, value: 1, tags: ['tag1', 'tag3']},
      { id: 3, value: 2, tags: []},
      { id: 4, value: 5, tags: ['tag3', 'tag5']},
    ]
   };

   constructor() {
    super();
    console.log('App - Constructor');
   }

   componentDidMount() {
    console.log('App - Mounted');
   }

   handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
   };

   handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
   };

   handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters: counters })
   };
   render() {
    console.log('App - Rendered');

    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
   } 
}
export default App;