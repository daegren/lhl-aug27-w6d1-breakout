import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    // If you don't use arrow functions for your custom methods
    // you need to bind them to `this` for everything to work.
    // this._increment = this._increment.bind(this);
    // this._decrement = this._decrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <h2>{this.props.title}</h2>
        <div className="button-row">
          <button onClick={this._increment}>＋</button>
          <span>{this.state.counter}</span>
          <button onClick={this._decrement}>-</button>
        </div>
      </div>
    );
  }

  _increment = e => {
    this.setState({ counter: this.state.counter + this.props.step }, () => {
      this._notifyChange();
    });
  };

  _decrement = e => {
    this.setState({ counter: this.state.counter - this.props.step }, () => {
      this._notifyChange();
    });
    // this.setState(prevState => ({
    //   ...prevState,
    //   counter: prevState.counter - 1
    // }));
    // this.setState(prevState =>
    //   Object.assign({}, prevState, { counter: prevState - 1 })
    // );
  };

  _notifyChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state.counter);
    }
  };
}
