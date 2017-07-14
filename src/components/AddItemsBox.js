import React from 'react'
import './AddItemsBox.css'

export default function AddItemsBox({onChange}) {
  return (
    <div className="addItemsBox">
      <textarea 
        onChange={onChange} 
        placeholder="Type to add multiple items, one per line"
        autoFocus="true"
      />
    </div>
  )
}
