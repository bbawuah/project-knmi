import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

export const YearSlider = () => {
  const [checked, setChecked] = useState(false)

  //   false is 2019 & true is 2020

  return (
    <div className="slider-container">
      <span>2019</span>
      <Toggle
        defaultChecked={checked}
        icons={false}
        onChange={() => setChecked(!checked)}
      />
      <span>2020</span>
    </div>
  )
}
