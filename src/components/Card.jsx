import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  children,
  image,
  imageOverlayText,
  imageOverlayBorderColor,
  size,
  className,
}) => (
  <div className={`${className} card`} style={{ fontSize: `${size}rem` }}>
    {image && (
    <div className="card__image">
      { imageOverlayText && (
      <span
        className="card__image__overlay"
        style={{ borderLeft: `5px solid ${imageOverlayBorderColor}` }}
      >
        {imageOverlayText}
      </span>
      ) }
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
  imageOverlayText: PropTypes.string,
  imageOverlayBorderColor: PropTypes.string,
  size: PropTypes.number,
};

Card.defaultProps = {
  children: null,
  image: null,
  imageOverlayText: null,
  imageOverlayBorderColor: '#32C5FF',
  size: 1,
};
export default Card;
