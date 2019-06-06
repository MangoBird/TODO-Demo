import React from 'react';
import './App.css';
import { ListItemAdder } from './ListItemAdder';
import { ListItem } from './ListItem';

class Todos extends React.Component {
  state = {
    todos: []
  }

  render() {
    return (
      <div>
        <h3>할일 목록</h3>
        <ListItemAdder onAdd={this.addTodo}/>
        {this.state.todos.map(todo => {
          return (<ListItem id={todo.id} content={todo.content} onDelete={this.deleteTodo}/>)
        })}
      </div>
    );
  }

  addTodo = (content) => {
    const newTodo = {
      id: Math.random(),
      content
    }
  
    this.setState(prevState => {
      return ({todos: [...prevState.todos, newTodo]})
    })
  }

  deleteTodo = (todoId) => {
    const toBeDeletedIndex = this.state.todos.findIndex(todo => todo.id === todoId)

    if (toBeDeletedIndex > -1) {
      this.setState(prevState => {
        const newTodos = [...prevState.todos]

        newTodos.splice(toBeDeletedIndex, 1)

        return { todos: newTodos}
      })
    }
  }
}

export default Todos;
