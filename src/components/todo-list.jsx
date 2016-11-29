import React from 'react';
import TodoListItem from './todo-list-item';

const todos = [{
		name: 'To-do Item #1'
	}, {
		name: 'To-do Item #2'
	}, {
		name: 'To-do Item #3'
	}, {
		name: 'To-do Item #4'
	}];

const TodoList = () =>
			  <ul className="todo-list">
   			  {todos.map((todo, index) => <TodoListItem name={todo.name} key={index}></TodoListItem>)}
				</ul>;

export default TodoList;

