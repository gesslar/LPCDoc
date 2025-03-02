import React from 'react'

export default function Icon({ name, size = 24 }) {
  return (
    <span
      className="lpcdoc-icon"
      data-icon={name}
      style={{ "--svg-icon-size": `${size}px` }}
    ></span>
  )
}
