import React from 'react';

const TodoListItem = props =>
			  <li>
				  <input type="checkbox"/>
				  <h3>{props.name}</h3>
					<button className="btn pull-right"><i className="fa fa-edit"></i></button>
				</li>;

export default TodoListItem;
