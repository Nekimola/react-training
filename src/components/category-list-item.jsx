import React from 'react';
import CategoryList from './category-list'

const CategoryListItem = props => {
  return <li>
           <span>
             {props.category.name}
             <button className="btn"><i className="fa fa-edit"></i></button>
           </span>
           <span className="pull-right">
             <button className="btn"><i className="fa fa-trash"></i></button>
             <button className="btn"><i className="fa fa-plus-square-o"></i></button>
           </span>
           {props.category.subcategories && props.category.subcategories.length ?
           <CategoryList  categories={props.category.subcategories}></CategoryList> : ''}
         </li>
};

export default CategoryListItem;