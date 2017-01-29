import React from 'react';
import { Link } from 'react-router';

const TodoListItem = ({ todo }) =>
        <li>
          <input type="checkbox" checked={todo.done} readOnly />
          <h3>{todo.name}</h3>
          <Link to={`/category/${todo.categoryId}/${todo.id}`}>
            <button className="btn pull-right"><i className="fa fa-edit"></i></button>
          </Link>
        </li>;

export default TodoListItem;
