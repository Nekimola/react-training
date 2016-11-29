import React from 'react';
import CategoryListItem from './category-list-item';

const categories = [{
  name: 'Category 1',
  subcategories: []
}, {
  name: 'Category 2',
  subcategories: []
}, {
  name: 'Category 3',
  subcategories: []
}, {
  name: 'Category 4',
  subcategories: [{
    name: 'Category 4_1'
  }, {
    name: 'Category 4_2'
  }]
}];

const CategoryList = () =>
        <ul className="category-list">
          {categories.map((category, index)=>
            <CategoryListItem
              key={index}
              name={category.name}
              subcategories={category.subcategories}></CategoryListItem>)}
        </ul>;

export default CategoryList;