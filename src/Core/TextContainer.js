import React from 'react'
import PropTypes from 'prop-types'

export const TextContainer = ({ children }) => {
  return <section className="text-container">{children}</section>
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
