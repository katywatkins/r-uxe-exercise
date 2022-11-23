import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './Blurb.scss';

const Blurb = ({
  mainTitle,
  children,
  fontSize,
  date,
  callout,
}) => {
  const formattedDate = dayjs(date).format('MMMM D, YYYY');
  return (
    <div className="blurb" style={{ fontSize: `${fontSize}rem` }}>
      {callout && <p className="secondary-text blurb__callout">{callout}</p> }
      { mainTitle && <h2 className="title-text">{mainTitle}</h2> }
      { date && <time dateTime={date} className="blurb__date default-text">{formattedDate}</time> }
      {children}
    </div>
  );
};

Blurb.propTypes = {
  mainTitle: PropTypes.string,
  children: PropTypes.node,
  fontSize: PropTypes.number,
  date: PropTypes.string,
  callout: PropTypes.string,
};

Blurb.defaultProps = {
  mainTitle: null,
  children: null,
  fontSize: 1,
  date: null,
  callout: null,
};

export default Blurb;
