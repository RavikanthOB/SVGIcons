import React from 'react'

const SVG = ({
  style = {},
  color = '#000',
  size = '100%',
  className = '',
  viewBox='0 0 459 459'
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
      d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5
			H51v51h357V25.5z"
    />
  </svg>
)

export default SVG
