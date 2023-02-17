import React from 'react'

import './List.scss';

const List = () => {
  return (
    <ul className='todo__list'>
      <li className='active'>
        <i></i>
        <span>Все задачи</span>
      </li>
    </ul>
  )
}

export default List