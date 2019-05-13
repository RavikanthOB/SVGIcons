import React from 'react'

const SVG = ({
  style = {},
  color = '#000',
  size = '100%',
  className = '',
  viewBox='0 0 535.5 535.5'
}) => (
  <svg
    width={size}
    style={style}
    height={size}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon fill={color} points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75 		"/>
  </svg>
)

export default SVG
