import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = ({ categories, onToggle, onStartEdit, onEdit, onStopEdit }) =>
  <ul className="category-list">
    {categories.map((category, index)=>
      <CategoryListItem
        key={index}
        category={category}
        onToggle={onToggle}
        onEdit={onEdit}
        onStopEdit={onStopEdit}
        onStartEdit={onStartEdit}>></CategoryListItem>)}
  </ul>;

export default CategoryList;