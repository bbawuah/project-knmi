import React from 'react';
import PropTypes from 'prop-types';

export const InformationBox = ({ children }) => {
  return <article className="info-box">{children}</article>;
};

InformationBox.propTypes = {
  children: PropTypes.node.isRequired,
};
