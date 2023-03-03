import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      {items.map(item => (
        <li className={}>
          <i>
            {item.icon ? (
              item.icon
            ) : (
              <i className={`badge badge__${items.color}`}>{items.color}</i>
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default List