import { Item } from "../models/Item"

interface TableItemProps {
  item: Item;
  onRemove: () => void;
}
function TableItem({item, onRemove}: TableItemProps) {
    return (
      <div className="container_item">
          <p>{item?.date?.toString()}</p>
          <p>{item.distance}</p>
          <div className="symbols">
            <div className="edit">✎</div>
            <div className="close" onClick={onRemove}>✗</div>
          </div>
      </div>
    )
  }
  
  export default TableItem