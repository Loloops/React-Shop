import React from 'react';

import classNames from 'classnames';

const Button = ({ className, onClick, children, outline }) => {
  return (
    <div className="header__cart">
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    </div>
  );
};
export default Button;
