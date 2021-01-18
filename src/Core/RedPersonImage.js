import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export function RedPersonImage({ styling }) {
  return (
    <img
      className="person-image"
      src="./assets/red-icon.png"
      style={styling}
    ></img>
  )
}

RedPersonImage.propTypes = {
  styling: PropTypes.object.isRequired,
}

export default RedPersonImage
