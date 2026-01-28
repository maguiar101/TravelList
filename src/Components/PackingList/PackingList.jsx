import './PackingList.css'

import Item from '../Item/Item.jsx'
import { useState } from 'react'

function PackingList({ items, onDeleteItem, onToggleItem, onClear }) {

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'packed') {
    sortedItems = items
                  .slice()
                  .sort((a, b) => Number(a.packed) - Number(b.packed));
  }


  return (
    <>
      <div className='packingList'>

        <h3 className='listTitle'>📝 Packing List</h3>
       
        <ul className='list'>
          {sortedItems.map((item) => (
            <Item item={item} 
                  onDeleteItem={onDeleteItem} 
                  onToggleItem={onToggleItem} 
                  key={item.id} 
            />
          ))}
        </ul>
        
        <div className='controls'>
          <select className='sortSelect' value={sortBy} onChange={event => setSortBy(event.target.value)}>
            <option value='input'>
              Sort by input order
            </option>
            <option value='description'>
              Sort by description
            </option>
            <option value='packed'>
              Sort by packed status
            </option>
          </select>
          <button className='resetButton' onClick={onClear}>
            Clear List
          </button>
        </div>
      </div>
    </>
  )
}

export default PackingList
