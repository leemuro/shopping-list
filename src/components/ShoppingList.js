import React from 'react';
import './ShoppingList.css'

function listCategory(categoryName, categoryItems, itemCompletionStates, onItemClick) {
    return (
        <li key={categoryName}>
            <h1 className="shopping-category">{categoryName}</h1>
            <ul>
                {Object.keys(categoryItems).map(itemId => {
                    let item = categoryItems[itemId]
                    let completed = itemCompletionStates[itemId]
                    return (
                        <li key={itemId} 
                            onClick={onItemClick.bind(null, itemId)} 
                            className={completed ? "shopping-item shopping-item-completed" : "shopping-item"}>
                            {item.description}
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default function ShoppingList({ categorizedItems, itemCompletionStates, onItemClick }) {
    return ( 
        <div className="shopping-list">
            {Object.keys(categorizedItems).length > 0 
                ? <ul>
                    {Object.keys(categorizedItems).map(c => listCategory(c, categorizedItems[c], itemCompletionStates, onItemClick))}
                  </ul>
                : <p className="no-items">Click Add to add some items to the list.</p>
            }
        </div>
    )
}