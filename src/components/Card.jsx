import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  children,
  image,
}) => (
  <div className="card">
    {image && (
    <div className="card__image">
      {' '}
      {image}
      {' '}
    </div>
    ) }
    <div className="card__content">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  /**  Main content of card, displays on the right if you pass in an image */
  children: PropTypes.node,
  /** Image displays on the left side of the card */
  image: PropTypes.node,
};

Card.defaultProps = {
  children: null,
  image: null,
};
export default Card;
