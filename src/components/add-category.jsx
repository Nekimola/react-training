import React from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../actions'

const AddCategory = ({ dispatch }) => {
  let input;

  return (
    <form className="form-inline" onSubmit={e => {
      e.preventDefault();

      if (!input.value.trim()) {
        return
      }

      dispatch(addCategory(input.value));
      input.value = '';
    }}>
      <div className="form-group">
        <div className="input-group">
          <input type="text"
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
  )
};

export default connect()(AddCategory);