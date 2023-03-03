import React from 'react'
import "./Barge.scss"


const Badge = ({ color, onClick, className }) => {
  return (
    <i onClick={onClick} className={`badge badge__${color} ${className}`}></i>
  )
}

export default Badge