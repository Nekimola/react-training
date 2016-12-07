import React from 'react';
import TodoListItem from './todo-list-item';
import { categories } from '../categories.json';

const findCategory = (categories, id) => {
  let category = categories.find(cat => cat.id === id);

  return category || categories.reduce((prev, cat) => {
      const { subcategories } = cat;
      if (subcategories && subcategories.length) {
        return findCategory(subcategories, id);
      }
    });
};

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentWillReceiveProps() {
    const { categoryId } = this.props.params;
    const category = findCategory(categories, parseInt(categoryId));

    this.setState({
      todos: category && category.todos || []
    });
  }

  render () {
    return (
      <ul className="todo-list">
        {this.state.todos.map((todo, index) => <TodoListItem name={todo.name} key={index}></TodoListItem>)}
      </ul>
    );
  }
}
