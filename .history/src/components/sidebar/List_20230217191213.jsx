import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      {items.map(item =>)}
    </ul>
  )
}

export default List