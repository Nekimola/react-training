import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from './todo-list-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTodos () {
    const { categoryId } = this.props.params;
    const { todos } = this.props;

    return todos
      .filter(todo => todo.categoryId === parseInt(categoryId))
      .filter(todo => this.props.showDone ? todo.done : true)
      .filter(todo => todo.name.startsWith(this.props.searchQuery))
      .map((todo, index) => <TodoListItem todo={todo} key={index}></TodoListItem>)
  }

  render () {
    return (
      <ul className="todo-list">
        {this.renderTodos()}
      </ul>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    todos: state.todos,
    showDone: state.filters.showDone,
    searchQuery: state.filters.searchQuery
  };
};

export default connect(mapSateToProps)(TodoList);