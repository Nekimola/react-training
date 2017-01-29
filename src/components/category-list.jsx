import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = ({ categories,
                        actions,
                        currentCategoryId,
                        onToggle,
                        onStartEdit,
                        onEdit,
                        onStopEdit,
                        onDelete,
                        onMove,
                        onAddSubCategory }) =>
  <ul className="category-list">
    {categories.map((category, index)=>
      <CategoryListItem
        key={index}
        category={category}
        actions={actions}
        currentId={currentCategoryId}
        onToggle={onToggle}
        onEdit={onEdit}
        onStopEdit={onStopEdit}
        onStartEdit={onStartEdit}
        onDelete={onDelete}
        onMove={onMove}
        onAddSubCategory={onAddSubCategory}></CategoryListItem>)}
  </ul>;

export default CategoryList;