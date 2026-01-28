import './Form.css'

import { useState } from 'react'

function Form({ onAddItems }) {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
 

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      quantity,
      packed: false,
      id: Date.now(),
    };
    
    onAddItems(newItem);
    setName("");
    setQuantity(1);
  }

  
  return (
    <>
        <form className='addForm' onSubmit={handleSubmit}>

            <h4 className='formTitle'>✅What do you need for your trip? ✅</h4>

            <select className='dropdown'
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))} 

            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option> 
              ))}
            </select>

            <input className='formInput' 
                    type="text" 
                    placeholder='Item' 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
            />

            <button className='addButton' type="submit">
              Add
            </button>
        </form>
      
    </>
  )
}

export default Form
