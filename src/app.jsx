import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import styles from './index.scss';
import React from 'react';

import TodoList from './components/todo-list';
import Progress from './components/progress';
import Header from './components/header';

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
						<ul className="category-list">
							<li>
								<span>
									Category 1
									<button className="btn"><i className="fa fa-edit"></i></button>
								</span>
								<span className="pull-right">
									<button className="btn"><i className="fa fa-trash"></i></button>
									<button className="btn"><i className="fa fa-plus-square-o"></i></button>
								</span>
							</li>
							<li>
								<span>
									Category 2
									<button className="btn"><i className="fa fa-edit"></i></button></span>
								<span className="pull-right">
									<button className="btn"><i className="fa fa-trash"></i></button>
									<button className="btn"><i className="fa fa-plus-square-o"></i></button>
								</span>
							</li>
							<li>
								<span>
									<button className="btn arrow"><i className="fa fa-chevron-down"></i></button>
									Category 3
									<button className="btn"><i className="fa fa-edit"></i></button></span>
								<span className="pull-right">
									<button className="btn"><i className="fa fa-trash"></i></button>
									<button className="btn"><i className="fa fa-plus-square-o"></i></button>
								</span>

								<ul className="category-list">
									<li>
										<span>
											Category 3_1
											<button className="btn"><i className="fa fa-edit"></i></button>
										</span>
										<span className="pull-right">
											<button className="btn"><i className="fa fa-trash"></i></button>
											<button className="btn"><i className="fa fa-plus-square-o"></i></button>
										</span>
									</li>
									<li>
										<span>
											Category 3_2
											<button className="btn"><i className="fa fa-edit"></i></button></span>
										<span className="pull-right">
											<button className="btn"><i className="fa fa-trash"></i></button>
											<button className="btn"><i className="fa fa-plus-square-o"></i></button>
										</span>
									</li>
									<li>
										<span>
											Category 3_3
											<button className="btn"><i className="fa fa-edit"></i></button></span>
										<span className="pull-right">
											<button className="btn"><i className="fa fa-trash"></i></button>
											<button className="btn"><i className="fa fa-plus-square-o"></i></button>
										</span>
									</li>
								</ul>
							</li>
						</ul>
					</section>
					<section className="main-list">
						<TodoList/>
					</section>
				</div>
      </div>

    )
  }
}
