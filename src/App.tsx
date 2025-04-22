import { useState } from 'react'
import Form from './Form'
import Logo from './Logo'
import PackingList, { TripItem } from './PackingList'
import Stats from './Stats'
import "./index.css"

function App()
{
  const [items, setItems] = useState<TripItem[]>([]);

  function handleAddItem(item: TripItem)
  {
    setItems(prevItems => [...prevItems, item]);
  }

  function handleDeleteItem(id: number)
  {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id: number)
  {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList()
  {
    const confirmed = window.confirm("Are you sure you want to delete all items?");

    if (confirmed)
      setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

export default App
