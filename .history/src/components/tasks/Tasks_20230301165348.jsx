import React from 'react'

import editSvg from '../../assets/img/edit.svg'
import "./Tasks.scss"

const Tasks = () => {
  return (
    <div className='task'>
      <h2>
        Фронтенд
        <img src={editSvg} alt="ed"/>
      </h2>
    </div>
  )
}

export default Tasks