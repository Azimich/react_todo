import React from 'react'

import "./Barge.scss"

const Badge = ({ color, onClikc }) => <i onClick={onClikc} className={`badge badge__${color}`}></i>

export default Badge