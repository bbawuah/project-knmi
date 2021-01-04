import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const InformationBox = ({ children, backgroundColor }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    switch (backgroundColor) {
      case 'green':
        setColor('#003E1F');
        break;
      case 'red':
        setColor('#BA181B');
        break;
      case 'white':
        setColor('#FFFFFF');
        break;
    }
  }, []);

  return (
    <article className="info-box" style={{ backgroundColor: color }}>
      {children}
    </article>
  );
};

InformationBox.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.node.isRequired,
};
