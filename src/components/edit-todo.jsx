import React from 'react';

import CategoryList from './category-list';

import { categories } from '../categories.json';

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories
    };
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

  render () {
    return (
      <div>
        <header>
          <h1>Yoo</h1>
        </header>

        <div className="content">
          <section className="sidebar">
            {this.state.categories && this.state.categories.length > 0 &&
            <CategoryList
              categories={this.state.categories}
              onToggle={(category) => this.onCategoryToggle(category)}></CategoryList>
            }
          </section>

          <section className="main-list">
            <form>
              <div className="form-group pull-right">
                <input type="submit" className="btn" value="Save Changes"/>
                <input type="button" className="btn" value="Cancel"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <textarea className="form-control" id="" cols="30" rows="10"></textarea>
            </form>
          </section>
        </div>
      </div>
    );
  }
}