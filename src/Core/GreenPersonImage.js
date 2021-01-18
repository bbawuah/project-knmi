import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export function GreenPersonImage({ styling }) {
  return (
    <img
      className="person-image"
      src="./assets/darkgreen-icon.png"
      style={styling}
    ></img>
  )
}

GreenPersonImage.propTypes = {
  styling: PropTypes.object.isRequired,
}

export default GreenPersonImage
