import { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectitem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectitem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectitem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
