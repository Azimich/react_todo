import React from 'react'
import classNames from 'classnames';

import './List.scss';
import Badge from '../badge/Badge';
import removeIcon from '../../assets/img/remove.svg'


const List = ({ items, isRemovable, onClick, onRemove }) => {

    if ()

  return (
    <ul onClick={onClick} className='todo__list'>
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && 
            <img
              onClick={()=> onRemove(item)}
              className='todo__list__remove__icon'
              src={removeIcon} alt="remove"
            />
          }
        </li>
      ))}
    </ul>
  )
}

export default List