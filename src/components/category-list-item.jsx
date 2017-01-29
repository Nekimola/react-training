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
      actions,
      currentId,
      onToggle,
      onStartEdit,
      onEdit,
      onStopEdit,
      onDelete,
      onMove,
      onAddSubCategory } = this.props;
    const activeClass = category.id === parseInt(currentId) ? 'active' : '';
    const classNames = ['category-item', activeClass].join(' ');

    return (
      <li>
        <div className={classNames}>
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
            {actions.edit &&
              <button className="btn" onClick={() => onStartEdit(category)}>
                <i className="fa fa-edit"></i>
              </button>
            }
          </span>
          <span className="pull-right">
            {actions.delete &&
              <button className="btn"
                      onClick={() => onDelete(category)}>
                <i className="fa fa-trash"></i>
              </button>
            }
            {actions.add &&
              <button className="btn"
                      onClick={() => onAddSubCategory(category)}>
                <i className="fa fa-plus-square-o"></i>
              </button>
            }
            {actions.move && category.id !== parseInt(currentId) &&
              <button className="btn"
                      onClick={() => onMove(category)}>
                <i className="fa fa-mail-reply"></i>
              </button>
            }
          </span>
        </div>

        {this.getSubCategories(category).length > 0 && category.opened &&
          <CategoryList
            categories={this.getSubCategories(category)}
            actions={actions}
            currentCategoryId={currentId}
            onToggle={onToggle}
            onEdit={onEdit}
            onStopEdit={onStopEdit}
            onStartEdit={onStartEdit}
            onDelete={onDelete}
            onMove={onMove}
            onAddSubCategory={onAddSubCategory}></CategoryList>
        }
      </li>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    categories : state.categories
  };
};

export default connect(mapSateToProps)(CategoryListItem);
