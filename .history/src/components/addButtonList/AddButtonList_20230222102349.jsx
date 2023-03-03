import React, { useState } from 'react'

import Badge from '../badge/Badge';
import List from '../sidebar/List'
import closePopup from "../../assets/img/close.svg"
import "./AddListButton.scss"


const AddButtonList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const [selectedColor, selectColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('')

  const addList = () => {
    if (!inputValue) {
      alert('Введи название списка епт...')
      return;
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    onAdd({ id: Math.random(), name: inputValue, color: color });
    setVisiblePopup(false)
    setInputValue('')
    sele
  }

  return (
    <div className="add__list">
      <List 
        onClick={()=> setVisiblePopup(true)}
        items={[
          {
            className: 'todo__list__button',
            icon: (
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            name: 'Добавить задачу'
          }
        ]}
      />
      {visiblePopup && 
        <div className="add__list__popup">
          <img onClick={()=> setVisiblePopup(false)} src={closePopup} alt="close" className="add__list__popup__close" />
          
          <input 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className='field' 
            type='text' 
            placeholder='Название списка' 
          />
          
          <div className="add__list__popup__colors">
            {colors.map(color => (
              <Badge 
                onClick={()=> selectColor(color.id)} 
                key={color.id} 
                color={color.name} 
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button 
            className='button'
            onClick={addList}
          >
            Добавить
          </button>
        </div>
      }
    </div>
  )
}

export default AddButtonList


