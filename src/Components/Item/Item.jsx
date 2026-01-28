import React from 'react'
import './Item.css'

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input className='checkbox' type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.name}
      </span>

      <button className='deleteButton' onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  )
}

export default Item
