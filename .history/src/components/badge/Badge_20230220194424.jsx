import React from 'react'
import classNames from 'classnames'

import "./Barge.scss"

const Badge = ({ color, onClick, className }) => {
  return (
    <i onClick={onClick} className={`badge badge__${}`} ></i>
  )
}

export default Badge