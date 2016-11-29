import React from 'react';
import CategoryListItem from './category-list-item';

const SubCategoryList = props =>
        <ul className="category-list">
          {props.items.map((category, index) =>
            <CategoryListItem
              name={category.name}
              subcategories={category.subcategories || []}
              key={index}></CategoryListItem>)}
        </ul>;

export default SubCategoryList;