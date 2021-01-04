import React from 'react';
import PropTypes from 'prop-types';

export const Subtitle = ({ children }) => {
  return <h2 className="Subtitle">{children}</h2>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};
