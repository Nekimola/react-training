import React from 'react';
import SubCategoryList from './sub-category-list'

const CategoryListItem = props => {
  return <li>
          <span>
            {props.name}
            <button className="btn"><i className="fa fa-edit"></i></button>
          </span>
    <span className="pull-right">
            <button className="btn"><i className="fa fa-trash"></i></button>
            <button className="btn"><i className="fa fa-plus-square-o"></i></button>
          </span>

    <SubCategoryList items={props.subcategories}></SubCategoryList>
  </li>
};

export default CategoryListItem;