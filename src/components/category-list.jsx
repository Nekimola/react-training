import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = ({ categories, onToggle, onStartEdit, onEdit, onStopEdit, onDelete }) =>
  <ul className="category-list">
    {categories.map((category, index)=>
      <CategoryListItem
        key={index}
        category={category}
        onToggle={onToggle}
        onEdit={onEdit}
        onStopEdit={onStopEdit}
        onStartEdit={onStartEdit}
        onDelete={onDelete}>></CategoryListItem>)}
  </ul>;

export default CategoryList;