import { memo } from 'react';
import PropTypes from 'prop-types';

const Categories = memo(function Categories({ items, onClickItem, activeCategory }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
};

Categories.defaultProps = { items: [], activeCategory: null };

export default Categories;
