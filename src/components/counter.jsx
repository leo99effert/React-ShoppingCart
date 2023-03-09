import React, { Component } from 'react'

class Counter extends Component { 

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log('Value has changed');
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  // state = {
  //   value: this.props.counter.value,
  //   tags: ['tag1', 'tag2']
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
  }

  render() { 
    console.log('Counter - Rendered');

    return (
      <div>

        {this.props.children}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        
        <button 
          onClick={() => this.props.onIncrement(this.props.counter)} 
          className="btn btn-secondary btn-sm"
        >Increment</button>

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>


        {/* { this.state.tags.length === 0 && 'Please create a new tag!'}
        { this.renderTags() } */}


      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value == 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero': count;
  }
}
export default Counter;