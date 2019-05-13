import React from 'react'

const SVG = ({
  style = {},
  color = '#000',
  size = '100%',
  className = '',
  viewBox = '0 0 510 510',
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
  
  <g>
	<g id="access-time">
		<path style={{fillOpacity:0.9}} fill={color} d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z
			 M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/>
		<polygon style={{fillOpacity:0.9}} fill={color} points="267.75,127.5 229.5,127.5 229.5,280.5 362.1,362.1 382.5,328.95 267.75,260.1 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
  </svg>
)

export default SVG
