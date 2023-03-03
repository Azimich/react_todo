import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      {items.map()}
    </ul>
  )
}

export default List