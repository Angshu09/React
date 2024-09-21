import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex justify-between p-6 shadow-md'>
        <h1>Random Page</h1>
        <ul className='flex gap-6'>
            <li><NavLink className={(e) => {
              if(e.isActive){
                return 'underline text-blue-600'
              }
            }} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'text-blue-700 underline' : ''} to="/about">About</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'text-blue-700 underline' : ''} to="/contact">Contacts</NavLink></li>
        </ul>
    </header>
  )
}
