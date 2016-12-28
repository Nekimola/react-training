import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import styles from './index.scss';
import React from 'react';
import { connect } from 'react-redux';

import Progress from './components/progress';
import Header from './components/header';
import CategoryList from './components/category-list';
import AddCategory from './components/add-category';
import AddTodo from './components/add-todo';
import { addTodoAction, addCategoryAction } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
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

  onCategoryAdd (name) {
    this.props.dispatch(addCategoryAction(name));
  }

  onTodoAdd (title) {
    const { categoryId } = this.props;
    this.props.dispatch(addTodoAction(title, categoryId));
  }

  render() {
    return (
      <div>
        <Header/>
        <Progress/>
        <section className="action-holder">
          <AddCategory onCategoryAdd={(name) => this.onCategoryAdd(name)}/>
          <AddTodo onTodoAdd={(name) => this.onTodoAdd(name)}/>
        </section>

        <div className="content">
          <section className="sidebar">
            {this.props.categories && this.props.categories.length > 0 &&
              <CategoryList
                categories={this.props.categories}
                onToggle={(category) => this.onCategoryToggle(category)}></CategoryList>
            }
          </section>

          <section className="main-list">
            {this.props.children}
          </section>
        </div>
      </div>
    )
  }
}

const mapSateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    categoryId: ownProps.params.categoryId
  };
};

export default connect(mapSateToProps)(App);
