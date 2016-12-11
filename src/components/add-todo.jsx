import React from 'react';

const AddTodo = () =>
  <form className="form-inline">
    <div className="form-group">
      <div className="input-group">
        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Enter todo title" />
        <div className="input-group-addon">
          <button type="submit" className="btn" >Add</button>
        </div>
      </div>
    </div>
  </form>;

export default AddTodo;