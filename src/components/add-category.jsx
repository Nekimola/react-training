import React from 'react';

let input;

export default ({ onCategoryAdd }) => (
  <form className="form-inline" onSubmit={e => {
    e.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    onCategoryAdd(input.value);
    input.value = '';
  }}>
    <div className="form-group">
      <div className="input-group">
        <input type="text"
               autoComplete="off"
               className="form-control"
               id="exampleInputAmount"
               placeholder="Enter category title"
               ref={node => {
                 input = node
               }}/>
        <div className="input-group-addon">
          <button type="submit" className="btn">Add</button>
        </div>
      </div>
    </div>
  </form>
);