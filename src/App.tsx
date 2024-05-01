import './App.css'
import Form from './components/Form'
import { Item } from '../src/models/Item'
import { useState } from 'react';
import TableList from './components/TableList';



function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    const existingItem = items.find((existingItem) => existingItem.date !== undefined && item.date !== undefined && existingItem.date.toDateString() === item.date.toDateString());
    
    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.date?.toDateString() === existingItem.date?.toDateString()
          ? { ...item, distance: (parseInt(item.distance) + parseInt(existingItem.distance)).toString() }
          : item
      );
      setItems(updatedItems);
    } else {
      const sortedItems = [...items, item];
      sortedItems.sort((a, b) => (a.date && b.date) ? (b.date.valueOf() - a.date.valueOf()) : 0);
      setItems(sortedItems);
    }
  }
  
  
  
  
  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }
  return (
    <>
      <Form onFormSubmit={addItem}/>
      <TableList items={items} removeItem={removeItem}/>
    </>
  )
}

export default App
