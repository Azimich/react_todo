import React from 'react'
import classNames from 'classnames'

import "./Barge.scss"

const Badge = ({ color, onClick }) => {
  return (
    <i onClick={onClick} className={`badge badge__${color}`}></i>
  )
}

export default Badge