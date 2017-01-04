import React from 'react';
import { Link } from 'react-router';

import CategoryList from './category-list'

const CategoryListItem = ({ category, onToggle, onStartEdit, onEdit, onStopEdit }) =>
  <li>
    <div className="category-item">
      <span>
        {category.subcategories && category.subcategories.length > 0 &&
         <button className="btn arrow"
                 onClick={() => onToggle(category)}>
           <i className={category.opened ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
         </button>
        }
        {category.isEditing &&
         <input type="text"
                value={category.name}
                onChange={(event) => onEdit(category, event.target.value)}
                onBlur={() => onStopEdit(category)}/>}
        {!category.isEditing &&
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        }
        <button className="btn" onClick={() => onStartEdit(category)}><i className="fa fa-edit"></i></button>
      </span>
      <span className="pull-right">
        <button className="btn"><i className="fa fa-trash"></i></button>
        <button className="btn"><i className="fa fa-plus-square-o"></i></button>
      </span>
    </div>

    {category.subcategories && category.subcategories.length > 0 && category.opened &&
    <CategoryList
      categories={category.subcategories}
      onToggle={onToggle}></CategoryList>
    }
  </li>;

export default CategoryListItem;