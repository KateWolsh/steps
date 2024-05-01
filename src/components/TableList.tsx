import { Item } from "../models/Item"
import TableItem from "./TableItem";

interface TableListProps {
  items: Item[];
  removeItem: (index: number) => void;
}

function TableList({items, removeItem}: TableListProps) {

  return (
    <div className="items">
      {items.map((item, index) => (
        <TableItem key={index} item={item} onRemove={() => removeItem(index)}/>
      ))}
      
    </div>
  )
}

export default TableList
