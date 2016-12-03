import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import styles from './index.scss';
import React from 'react';

import TodoList from './components/todo-list';
import Progress from './components/progress';
import Header from './components/header';
import CategoryList from './components/category-list';

import {todos} from './todos.json';
import {categories} from './categories.json';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
				<Progress/>
				<section className="action-holder">
					<form className="form-inline">
						<div className="form-group">
							<div className="input-group">
								<input type="text" className="form-control" id="exampleInputAmount" placeholder="Enter category title" />
								<div className="input-group-addon">
									<button type="submit" className="btn" >Add</button>
								</div>
							</div>
						</div>
					</form>
					<form className="form-inline">
						<div className="form-group">
							<div className="input-group">
								<input type="text" className="form-control" id="exampleInputAmount" placeholder="Enter category title" />
								<div className="input-group-addon">
									<button type="submit" className="btn" >Add</button>
								</div>
							</div>
						</div>
					</form>
				</section>

				<div className="content">
					<section className="sidebar">
						<CategoryList categories={categories}></CategoryList>
					</section>
					<section className="main-list">
						<TodoList todos={todos}/>
					</section>
				</div>
      </div>

    )
  }
}
