import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
					<h1>To-Do List</h1>

					<div className="checkbox header-item">
						<label>
							<input type="checkbox" /> Show active
						</label>
					</div>
					<form action="" className="header-item">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search"/>
						</div>
					</form>
				</header>

				<progress value={70} max={100}></progress>

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
						<ul>
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

								<ul className="child-list">
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
											Category 3
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
						<ul className="todo-list">
							<li>
								<input type="checkbox"/>
								<h3>To-do Item #1</h3>
								<button className="btn pull-right"><i className="fa fa-edit"></i></button>
							</li>
							<li>
								<input type="checkbox"/>
								<h3>To-do Item #2</h3>
								<button className="btn pull-right"><i className="fa fa-edit"></i></button>
							</li>
							<li>
								<input type="checkbox"/>
								<h3>To-do Item #3</h3>
								<button className="btn pull-right"><i className="fa fa-edit"></i></button>
							</li>
							<li>
								<input type="checkbox"/>
								<h3>To-do Item #4</h3>
								<button className="btn pull-right"><i className="fa fa-edit"></i></button>
							</li>
							<li>
								<input type="checkbox"/>
								<h3>To-do Item #5</h3>
								<button className="btn pull-right"><i className="fa fa-edit"></i></button>
							</li>
						</ul>
					</section>
				</div>
      </div>

    )
  }
}
