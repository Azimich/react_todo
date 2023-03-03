import React from 'react'
import classNames from 'classnames';

import './List.scss';

const List = ({ items, isRemovable }) => {
  return (
    <ul className='todo__list'>
      {items.map((item, index) => (
        <li className={classNames} >
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