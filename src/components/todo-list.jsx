import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) =>
			  <ul className="todo-list">
   			  {todos.map((todo, index) => <TodoListItem name={todo.name} key={index}></TodoListItem>)}
				</ul>;

export default TodoList;

