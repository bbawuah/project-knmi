import React from 'react'
import { useTrail, a } from 'react-spring'
import PropTypes from 'prop-types'

export const Trail = ({ isVisible, title, color }) => {
  const items = title.split(' ')
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 20,
    height: isVisible ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main">
      <div className="trails-main-text-container">
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height, color: color }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

Trail.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}
