import React from 'react';
import './ShoppingList.css'

function listCategory(category, onItemClick) {
  return (
    <li key={category.name}>
      <h1 className="shopping-category">{category.name}</h1>
      <ul>
        {
          category.items.map(item => {
            return (
              <li key={item.itemId} 
                  onClick={onItemClick.bind(null, item.itemId)} 
                  className={item.completed ? "shopping-item shopping-item-completed" : "shopping-item"}>
                {item.item.description}
              </li>
            )
          })
        }
      </ul>
    </li>
  )
}

export default function ShoppingList({ categorizedItemIds, items, itemCompletionStates, onItemClick }) {
  let categories = Object.keys(categorizedItemIds).map(cid => {
    return {
      name: cid,
      items: categorizedItemIds[cid].map(itemId => {
        return { itemId: itemId, item: items[itemId], completed: itemCompletionStates[itemId] }
      }).filter(item => item != null && item.item != null)
    }
  }).filter(c => c.items.length > 0)

  return ( 
    <div className="shopping-list">
      {
        categories.length > 0 
          ? <ul>{categories.map(c => listCategory(c, onItemClick))}</ul>
          : <p className="no-items">Click Add to add some items to the list.</p>
      }
    </div>
  )
}
