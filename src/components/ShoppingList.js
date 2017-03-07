import React from 'react';
import './ShoppingList.css'

function listCategory(category) {
    return (
        <li key={category.name}>
            <h1 className="shopping-category">{category.name}</h1>
            <ul>
                {category.items.map(i => {
                    if(i.completed)
                        return <li key={i.id} className="shopping-item shopping-item-completed">{i.description}</li>
                    else
                        return <li key={i.id} className="shopping-item">{i.description}</li>
                })}
            </ul>
        </li>
    )
}

export default function ShoppingList({ categorizedItems }) {
    return ( 
        <div className="shopping-list">
            {categorizedItems.length > 0 
                ? <ul>
                    {categorizedItems.map(c => listCategory(c))}
                  </ul>
                : <p className="no-items">Click Add to add some items to the list.</p>
            }
        </div>
    )
}