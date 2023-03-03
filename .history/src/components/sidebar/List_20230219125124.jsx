import React from 'react'
import classNames from 'classnames';

import './List.scss';

const List = ({ items, isRemovable, onClick }) => {
  return (
    <ul className='todo__list'>
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
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