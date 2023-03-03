import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      {items.map(item => (
        <li className={item.active ? 'active' : ''} key={item.Math.r}>
          <i>
            {item.icon ? (
              item.icon
            ) : (
              <i className={`badge badge__${item.color}`}>{items.color}</i>
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default List