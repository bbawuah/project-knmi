import React from 'react'
import PropTypes from 'prop-types'

export const NavButtons = ({ children }) => {
  return <button className="NavButtons">{children}</button>
}

NavButtons.propTypes = {
  children: PropTypes.node.isRequired,
}
