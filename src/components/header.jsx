import React from 'react';

const Header = ({ onShowDone, onSearch }) =>
        <header>
          <h1>To-Do List</h1>
          <div className="checkbox header-item">
            <label>
              <input type="checkbox"
                     onChange={() => onShowDone()}/> Show done
            </label>
          </div>
          <form action="" className="header-item">
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder="Search"
                     onChange={(e) => onSearch(e.target.value)}/>
            </div>
          </form>
        </header>;

export default Header;