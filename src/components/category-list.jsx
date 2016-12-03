import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = props =>
        <ul className="category-list">
          {props.categories.map((category, index)=>
            <CategoryListItem
              key={index}
              category={category}></CategoryListItem>)}
        </ul>;

export default CategoryList;