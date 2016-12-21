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

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   categories: props.categories
    // };
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

const mapSateToProps = (state) => {
  return {
    categories: state.categories
  };
};

export default connect(mapSateToProps)(App);
