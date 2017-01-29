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
import {
  toggleCategoryAction,
  addTodoAction,
  addCategoryAction,
  startEditCategoryAction,
  stopEditCategoryAction,
  editCategoryAction,
  deleteCategoryAction
} from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onCategoryToggle (category) {
    this.props.dispatch(toggleCategoryAction(category));
  }

  onCategoryAdd (name) {
    this.props.dispatch(addCategoryAction(name));
  }

  onTodoAdd (title) {
    const { categoryId } = this.props;
    this.props.dispatch(addTodoAction(title, parseInt(categoryId)));
  }

  onCategoryStartEdit (category) {
    this.props.dispatch(startEditCategoryAction(category));
  }

  onCategoryStopEdit (category) {
    this.props.dispatch(stopEditCategoryAction(category));
  }

  onCategoryEdit (category, name) {
    this.props.dispatch(editCategoryAction(category, name));
  }

  onCategoryDelete (category) {
    this.props.dispatch(deleteCategoryAction(category));
  }

  onAddSubCategory (category) {
    this.props.dispatch(addCategoryAction('', category.id));
  }

  render() {
    const categoryActions = {
      edit: true,
      add: true,
      delete: true
    };

    return (
      <div>
        <Header/>
        <Progress value={this.props.progress}/>
        <section className="action-holder">
          <AddCategory onCategoryAdd={(name) => this.onCategoryAdd(name)}/>
          <AddTodo onTodoAdd={(name) => this.onTodoAdd(name)}/>
        </section>

        <div className="content">
          <section className="sidebar">
            {this.props.categories && this.props.categories.length > 0 &&
              <CategoryList
                categories={this.props.categories.filter(cat => cat.parentId === -1)}
                actions={categoryActions}
                currentCategoryId={this.props.categoryId}
                onToggle={(category) => this.onCategoryToggle(category)}
                onStartEdit={(category) => this.onCategoryStartEdit(category)}
                onStopEdit={(category) => this.onCategoryStopEdit(category)}
                onEdit={(category, name) => this.onCategoryEdit(category, name)}
                onDelete={(category) => this.onCategoryDelete(category)}
                onAddSubCategory={(category) => this.onAddSubCategory(category)}></CategoryList>
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

const getProgress = (categories, todos) => {
  return categories.filter(category => {
    const catTodos = todos.filter(todo => todo.categoryId === category.id);
    return catTodos.length && catTodos.every(todo => todo.done);
  }).length / categories.length;
};

const mapSateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    categoryId: ownProps.params.categoryId,
    progress: getProgress(state.categories, state.todos)
  };
};

export default connect(mapSateToProps)(App);
