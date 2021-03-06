import React from 'react';
import Controls from './Controls';
import Value from './Value';
import s from './Counter.module.css';

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
    const { value } = this.state;
    return (
      <div className={s.counter}>
        <Value value={value} />
        <Controls
          onIncrement={this.hendeleIncrement}
          onDecrement={this.hendeDecrement}
        />
      </div>
    );
  }
}

export default Counter;
