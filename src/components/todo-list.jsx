import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = props =>
			  <ul className="todo-list">
   			  {props.todos.map((todo, index) => <TodoListItem name={todo.name} key={index}></TodoListItem>)}
				</ul>;

export default TodoList;

