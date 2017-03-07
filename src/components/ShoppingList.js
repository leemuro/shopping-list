import React from 'react';
import './ShoppingList.css'

function listCategory(category, onItemClick) {
    return (
        <li key={category.name}>
            <h1 className="shopping-category">{category.name}</h1>
            <ul>
                {Object.keys(category.items).map(itemId => {
                    let item = category.items[itemId]
                    return (
                        <li key={itemId} 
                            onClick={onItemClick.bind(null, itemId)} 
                            className={item.completed ? "shopping-item shopping-item-completed" : "shopping-item"}>
                            {item.description}
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default function ShoppingList({ categorizedItems, onItemClick }) {
    return ( 
        <div className="shopping-list">
            {categorizedItems.length > 0 
                ? <ul>
                    {categorizedItems.map(c => listCategory(c, onItemClick))}
                  </ul>
                : <p className="no-items">Click Add to add some items to the list.</p>
            }
        </div>
    )
}