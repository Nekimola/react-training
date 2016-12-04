import React from 'react';

const Header = () =>
        <header>
          <h1>To-Do List</h1>
          <div className="checkbox header-item">
            <label>
              <input type="checkbox"/> Show active
            </label>
          </div>
          <form action="" className="header-item">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
          </form>
        </header>;

export default Header;