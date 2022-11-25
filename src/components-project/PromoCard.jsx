import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import Blurb from '../components/Blurb';
import Button from '../components/Button';

import './PromoCard.scss';

const PromoCard = ({
  mainTitle,
  date,
  callout,
  imgSource,
  imgAltText,
  onButtonClick,
  buttonText,
  largerPromo,
  text,
  className,
  imageOverlayText,
  imageOverlayBorderColor,
}) => (
  <Card
    image={<img src={imgSource} alt={imgAltText} />}
    imageOverlayText={imageOverlayText}
    className={`${className} promo-card ${largerPromo ? 'promo-card--larger' : ''}`}
    imageOverlayBorderColor={imageOverlayBorderColor}
  >
    <Blurb
      date={date}
      mainTitle={mainTitle}
      callout={callout}
      size={largerPromo ? 1.125 : 1}
    >
      <p className="default-text promo-card__text">
        {text}
      </p>
      {/* below would ideally be a function that gets tested */}
      {onButtonClick && buttonText && <Button onClick={onButtonClick} text={buttonText} type={largerPromo ? 'primary' : 'tertiary'} /> }
    </Blurb>
  </Card>
);

PromoCard.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSource: PropTypes.node.isRequired,
  imgAltText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string,
  largerPromo: PropTypes.bool,
  text: PropTypes.string.isRequired,
  imageOverlayBorderColor: PropTypes.string,
  date: PropTypes.string,
  callout: PropTypes.string,
  className: PropTypes.string,
  imageOverlayText: PropTypes.string,
};

PromoCard.defaultProps = {
  onButtonClick: null,
  buttonText: null,
  largerPromo: false,
  imageOverlayBorderColor: null,
  date: null,
  callout: null,
  className: '',
  imageOverlayText: null,
};

export default PromoCard;
