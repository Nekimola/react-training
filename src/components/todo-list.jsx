import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from './todo-list-item';

const findCategoryById = (categories, id) => {
  let category = categories.find(cat => cat.id === id);

  return category || categories.reduce((prev, cat) => {
      const { subcategories } = cat;
      if (subcategories && subcategories.length) {
        return findCategoryById(subcategories, id);
      }
    });
};

const getTodos = (categoryId, categories) => {
  const category = findCategoryById(categories, parseInt(categoryId));
  return category && category.todos || [];
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    const { categoryId } = props.params;
    const { categories } = props;

    this.state = {
      todos: getTodos(categoryId, categories)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { categoryId } = nextProps.params;
    const { categories } = nextProps;

    this.setState({
      todos: getTodos(categoryId, categories)
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

const mapSateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(mapSateToProps)(TodoList);