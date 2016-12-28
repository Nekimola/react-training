import React from 'react';

let input;

const AddTodo = ({ onTodoAdd }) => (
  <form className="form-inline" onSubmit={e => {
    e.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    onTodoAdd(input.value);
    input.value = '';
  }}>
    <div className="form-group">
      <div className="input-group">
        <input type="text"
               className="form-control"
               id="exampleInputAmount"
               placeholder="Enter todo title"
               ref={node => {
                 input = node
               }}/>
        <div className="input-group-addon">
          <button type="submit" className="btn" >Add</button>
        </div>
      </div>
    </div>
  </form>
);

export default AddTodo;