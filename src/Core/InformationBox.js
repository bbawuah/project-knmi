import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const InformationBox = ({ children, backgroundColor }) => {
  const [addClass, setAddClass] = useState()

  useEffect(() => {
    switch (backgroundColor) {
      case 'green':
        setAddClass('green')
        break
      case 'red':
        setAddClass('red')
        break
      case 'white':
        setAddClass('white')
        break
    }
  }, [])

  return <article className={`info-box ${addClass}`}>{children}</article>
}

InformationBox.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.node.isRequired,
}
