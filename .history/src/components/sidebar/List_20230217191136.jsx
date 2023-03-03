import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      <li className={}>
        <i>
          {items.icon ? (
            items.icon
          ) : (
            <i className={`badge badge__${items.color}`}>{items.color}</i>
          )}
        </i>
        <span>{items.name}</span>
      </li>
    </ul>
  )
}

export default List