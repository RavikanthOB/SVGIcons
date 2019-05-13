import React from 'react'

const SVG = ({
  style = {},
  color = '#000',
  size = '100%',
  className = '',
  viewBox = '0 0 357 357',
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
  
    <path
      fill={color}
      d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"
    />
  </svg>
)

export default SVG
