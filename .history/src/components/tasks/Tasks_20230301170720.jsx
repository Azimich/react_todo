import React from 'react'

import editSvg from '../../assets/img/edit.svg'
import "./Tasks.scss"

const Tasks = () => {
  return (
    <div className='task'>
      <h2>
        Фронтенд
        <img src={editSvg} alt="edit"/>
      </h2>
      <div className="tasks__items">
        <div className="checkbox">
          <input 
            type="checkbox"
          />
          <label htmlFor=""></label>
        </div>
      </div>
    </div>
  )
}

export default Tasks