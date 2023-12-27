/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonConfig } from '../../data';

function Button({
  children, color = 'warning', rounded = 'base', size = 'medium', onClick, className,
}) {
  const getColorClass = (buttonColor) => ButtonConfig.color[buttonColor] || '';
  const getRoundedClass = (buttonRounded) => ButtonConfig.rounded[buttonRounded] || '';
  const getSizeClass = (buttonSize) => ButtonConfig.size[buttonSize] || '';

  return (
    <button
      type="button"
      className={`${getRoundedClass(rounded)} border ${getColorClass(color)} ${getSizeClass(size)} transition-colors hover:bg-transparent focus:outline-none font-medium text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  rounded: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
