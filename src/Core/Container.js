import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <section className="container">{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
