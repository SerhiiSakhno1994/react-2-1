import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 5,
  };
  state = {
    value: this.props.initialValue,
  };

  hendeleIncrement = () => {
    console.log('кликнули в увеличить');
    this.setState(prefState => {
      return {
        value: prefState.value + 1,
      };
    });
  };
  hendeDecrement = () => {
    console.log('кликнули в уменшить');
    this.setState(prefState => ({
      value: prefState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.hendeleIncrement}
          onDecrement={this.hendeDecrement}
        />
      </div>
    );
  }
}

export default Counter;
