import './App.css'
import Logo from './Components/Logo/Logo.jsx'
import Form from './Components/Form/Form.jsx'
import PackingList from './Components/PackingList/PackingList.jsx'
import Stats from './Components/Stats/Stats.jsx'
import { useState } from 'react'


function App() {
  
  const [items, setItems] = useState([]);


  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map(item => 
      item.id === id ? {...item, packed: !item.packed} 
      : item
    ))

  }

  function handleClear() {
    setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items}
                   onDeleteItem={handleDeleteItem}
                   onToggleItem={handleToggleItem}
                   onClear={handleClear}
       />
      <Stats items={items} />
    </>
  )
}

export default App
