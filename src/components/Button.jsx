import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  text,
  onClick,
  type,
}) => <button onClick={onClick} type="button" className={`button button--${type}`}>{text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
