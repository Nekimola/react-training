import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import CategoryList from './category-list';

class CategoryListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  getSubCategories (category) {
    return this.props.categories.filter(cat => cat.parentId === category.id);
  }

  render () {
    const {
      category,
      onToggle,
      onStartEdit,
      onEdit,
      onStopEdit,
      onDelete,
      onAddSubCategory } = this.props;

    return (
      <li>
        <div className="category-item">
          <span>
            {this.getSubCategories(category).length > 0 &&
              <button className="btn arrow"
                      onClick={() => onToggle(category)}>
                <i className={category.opened ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>
              </button>
            }
            {category.isEditing &&
              <input type="text"
                     value={category.name}
                     onChange={(event) => onEdit(category, event.target.value)}
                     onBlur={() => onStopEdit(category)}/>}
            {!category.isEditing &&
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            }
            <button className="btn" onClick={() => onStartEdit(category)}>
              <i className="fa fa-edit"></i>
            </button>
          </span>
          <span className="pull-right">
            <button className="btn"
                    onClick={() => onDelete(category)}>
              <i className="fa fa-trash"></i>
            </button>
            <button className="btn"
                    onClick={() => onAddSubCategory(category)}>
              <i className="fa fa-plus-square-o"></i>
            </button>
          </span>
        </div>

        {this.getSubCategories(category).length > 0 && category.opened &&
          <CategoryList
            categories={this.getSubCategories(category)}
            onToggle={onToggle}
            onEdit={onEdit}
            onStopEdit={onStopEdit}
            onStartEdit={onStartEdit}
            onDelete={onDelete}
            onAddSubCategory={onAddSubCategory}></CategoryList>
        }
      </li>
    );
  }
}

const mapSateToProps = (state, ownProps) => {
  return {
    categories : state.categories,
    category   : ownProps.category,
    onToggle   : ownProps.onToggle,
    onStartEdit: ownProps.onStartEdit,
    onEdit     : ownProps.onEdit,
    onStopEdit : ownProps.onStopEdit,
    onDelete   : ownProps.onDelete,
    onAddSubCategory: ownProps.onAddSubCategory,
  };
};

export default connect(mapSateToProps)(CategoryListItem);
