import React from 'react';
import PropTypes from 'prop-types';

export const Paragraph = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
