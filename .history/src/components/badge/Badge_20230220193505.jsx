import React from 'react'
import classNames from 'classnames'

import "./Barge.scss"

const Badge = ({ color, onClick }) => {
  return (
    <i onClick={onClick} className=('bage')></i>
  )
}

export default Badge