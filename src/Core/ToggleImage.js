import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import PropTypes from 'prop-types'

export const ToggleImage = ({ foto1, foto2 }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="toggle-image">
      <section>
        <img
          className="image"
          src={`./assets/${checked ? foto1 : foto2}`}
        ></img>
      </section>
      <div className="slider-container">
        <span>2019</span>
        <Toggle
          defaultChecked={checked}
          icons={false}
          onChange={() => setChecked(!checked)}
        />
        <span>2020</span>
      </div>
    </div>
  )
}

ToggleImage.propTypes = {
  foto1: PropTypes.string.isRequired,
  foto2: PropTypes.string.isRequired,
}
