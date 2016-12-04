import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import styles from './index.scss';
import React from 'react';

import TodoList from './components/todo-list';
import Progress from './components/progress';
import Header from './components/header';
import CategoryList from './components/category-list';
import AddCategory from './components/add-category';
import AddTodo from './components/add-todo';

import { categories } from './categories.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categories,
      todos: categories[0].todos
    };
  }

  onCategorySelect (category) {
    this.setState({
      todos: category.todos || []
    });
  }

  onCategoryToggle (category) {
    var index = this.state.categories.indexOf(category);

    this.setState({
      categories: [
        ...this.state.categories.slice(0, index),
        Object.assign({}, category, {opened: !category.opened}),
        ...this.state.categories.slice(index + 1)
      ]
    });
  }

  render() {
    return (
      <div>
        <Header/>
				<Progress/>
				<section className="action-holder">
					<AddCategory/>
					<AddTodo/>
				</section>

				<div className="content">
					<section className="sidebar">
            {this.state.categories && this.state.categories.length > 0 &&
              <CategoryList
                categories={this.state.categories}
                onToggle={(category) => this.onCategoryToggle(category)}
                onSelect={(category) => this.onCategorySelect(category)}></CategoryList>
            }
					</section>
					<section className="main-list">
            {this.state.todos && this.state.todos.length > 0 &&
              <TodoList todos={this.state.todos}/>
            }
					</section>
				</div>
      </div>
    )
  }
}
