import React from 'react';
import { connect } from 'react-redux';

import CategoryList from './category-list';
import { editTodoAction } from '../actions';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todos.find(todo => todo.id === parseInt(props.todoId))
    };
  }

  updateTodo (diff) {
    this.setState({
      todo: Object.assign({}, this.state.todo, diff)
    });
  }

  onDoneChange (done) {
    this.updateTodo({ done });
  }

  onDescriptionChange (description) {
    this.updateTodo({ description });
  }

  onNameChange (name) {
    this.updateTodo({ name });
  }

  onTodoSave (e) {
    e.preventDefault();
    this.props.dispatch(editTodoAction(this.state.todo));
  }

  render () {
    return (
      <div>
        <header>
          <h1>{this.state.todo.name}</h1>
        </header>

        <div className="content">
          <section className="sidebar">
            {this.props.categories && this.props.categories.length > 0 &&
              <CategoryList
                categories={this.props.categories}
                onToggle={(category) => this.onCategoryToggle(category)}></CategoryList>
            }
          </section>

          <section className="main-list">
            <form>
              <div className="form-group pull-right">
                <input type="submit"
                       className="btn"
                       value="Save Changes"
                        onClick={(e) => this.onTodoSave(e)}/>
                <input type="button" className="btn" value="Cancel"/>
              </div>
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       value={this.state.todo.name || ''}
                        onChange={(e) => this.onNameChange(e.target.value)}/>
              </div>
              <div className="checkbox">
                <input type="checkbox"
                       checked={this.state.todo.done || ''}
                       onChange={(e) => this.onDoneChange(e.target.checked)}/>
              </div>
              <textarea className="form-control"
                        cols="30" rows="10"
                        value={this.state.todo.description || ''}
                        onChange={(e) => this.onDescriptionChange(e.target.value)}></textarea>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

const mapSateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    todos: state.todos,
    categoryId: ownProps.params.categoryId,
    todoId: ownProps.params.todoId
  };
};

export default connect(mapSateToProps)(EditTodo);