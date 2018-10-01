import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter Example</h1>
        <Counter
          step={1}
          title="Number of seconds till end of class"
          onChange={i => console.log('Counter 1 value: ', i)}
        />
        <Counter
          step={2}
          title="Red skittles"
          onChange={i => console.log('Counter 2 value: ', i)}
        />
        <Counter
          step={5}
          title="Benders beer counter"
          onChange={i => console.log('Counter 3 value: ', i)}
        />
        <Counter
          step={10}
          title="Blah"
          onChange={i => console.log('Counter 4 value: ', i)}
        />
      </div>
    );
  }
}
export default App;
