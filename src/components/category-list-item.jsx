import React from 'react';
import CategoryList from './category-list'

const CategoryListItem = ({ category, onSelect, onToggle }) =>
       <li>
         <div className="category-item">
           <span>
             {category.subcategories && category.subcategories.length > 0 &&
               <button className="btn arrow" onClick={() => onToggle(category)}>
                 <i className={category.opened ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
               </button>
             }
             <a href="#" onClick={() => onSelect(category)}>{category.name}</a>
             <button className="btn"><i className="fa fa-edit"></i></button>
           </span>
             <span className="pull-right">
             <button className="btn"><i className="fa fa-trash"></i></button>
             <button className="btn"><i className="fa fa-plus-square-o"></i></button>
           </span>
         </div>

         {category.subcategories && category.subcategories.length > 0 && category.opened &&
           <CategoryList
             categories={category.subcategories}
             onSelect={onSelect}></CategoryList>
         }
       </li>;

export default CategoryListItem;