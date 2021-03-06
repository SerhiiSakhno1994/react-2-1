import React from 'react';

import Counter from './components/Couner';
import Dropdown from './components/Dropdown';
import Container from './components/Container';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initalTodos from './components/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends React.Component {
  state = {
    todos: initalTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    return (
      <Container>
        <h1>Стан компонента</h1>
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Загальна кількість:{totalTodoCount} </p>
          <p>Кількість виконаних:{completedTodoCount} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

export default App;
