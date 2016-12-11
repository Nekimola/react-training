import React from 'react';
import TodoListItem from './todo-list-item';
import { categories } from '../categories.json';

const findCategoryById = (categories, id) => {
  let category = categories.find(cat => cat.id === id);

  return category || categories.reduce((prev, cat) => {
      const { subcategories } = cat;
      if (subcategories && subcategories.length) {
        return findCategoryById(subcategories, id);
      }
    });
};

const getTodos = function (categoryId) {
  const category = findCategoryById(categories, parseInt(categoryId));
  return category && category.todos || [];
};

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    const { categoryId } = this.props.params;

    this.state = {
      todos: getTodos(categoryId)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { categoryId } = nextProps.params;

    this.setState({
      todos: getTodos(categoryId)
    });
  }

  render () {
    return (
      <ul className="todo-list">
        {this.state.todos.map((todo, index) => <TodoListItem todo={todo} key={index}></TodoListItem>)}
      </ul>
    );
  }
}
