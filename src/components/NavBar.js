import React from 'react'
import './NavBar.css'

export default function NavBar({ leftItem, title, rightItem, fixed }) {
  return (
    <div className={fixed ? "navbar-fixed" : null}>
      <nav className="navbar">
        <div className="navbar-item navbar-left">
          {leftItem}
        </div>
        <div className="navbar-item navbar-title">
          <span>{title}</span>
        </div>
        <div className="navbar-item navbar-right">
          {rightItem}
        </div>
      </nav>
    </div>
  )
}
