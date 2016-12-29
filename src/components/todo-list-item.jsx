import React from 'react';
import { Link } from 'react-router';

const TodoListItem = ({ todo }) =>
        <li>
          <input type="checkbox" checked={todo.done} />
          <h3>{todo.name}</h3>
          <Link to={`/todo/${todo.id}`}>
            <button className="btn pull-right"><i className="fa fa-edit"></i></button>
          </Link>
        </li>;

export default TodoListItem;
