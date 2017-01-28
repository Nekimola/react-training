import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = ({ categories, currentCategoryId, onToggle, onStartEdit, onEdit, onStopEdit, onDelete, onAddSubCategory }) =>
  <ul className="category-list">
    {categories.map((category, index)=>
      <CategoryListItem
        key={index}
        category={category}
        currentId={currentCategoryId}
        onToggle={onToggle}
        onEdit={onEdit}
        onStopEdit={onStopEdit}
        onStartEdit={onStartEdit}
        onDelete={onDelete}
        onAddSubCategory={onAddSubCategory}></CategoryListItem>)}
  </ul>;

export default CategoryList;