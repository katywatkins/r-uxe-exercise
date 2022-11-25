import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './Blurb.scss';

const Blurb = ({
  callout,
  children,
  date,
  mainTitle,
  size,
}) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY');
  return (
    <div className="blurb" style={{ fontSize: `${size}rem` }}>
      {callout && <p className="callout-text blurb__callout">{callout}</p> }
      { mainTitle && <h2 className="card-title-text blurb__title">{mainTitle}</h2> }
      { date && <time dateTime={date} className="blurb__date">{formattedDate}</time> }
      {children}
    </div>
  );
};

Blurb.propTypes = {
  callout: PropTypes.string,
  mainTitle: PropTypes.string,
  children: PropTypes.node,
  /** This value is set as the rem value on the outermost element of the component,
   * allowing you to scale everything up or down as needed */
  size: PropTypes.number,
  /** Date should be formatted as YYYY-MM-DD */
  date: PropTypes.string,
};

Blurb.defaultProps = {
  mainTitle: null,
  children: null,
  size: 1,
  date: null,
  callout: null,
};

export default Blurb;
