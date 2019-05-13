import React from 'react'

const SVG = ({
  style = {},
  color = '#000',
  size = '100%',
  className = '',
  viewBox = '0 0 408 408',
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
      d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z"
    />
  </svg>
)

export default SVG
