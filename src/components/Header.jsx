import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AppContext } from '../App'
const navLinks = [
  {
    id: 1,
    href: '/',
    title: 'Home'
  },
  {
    id: 2,
    href: '/about',
    title: 'About'
  },
  {
    id: 3,
    href: '/contacts',
    title: 'Contacts'
  },
  {
    id: 4,
    href: '/product',
    title: 'Product'
  }
]

export default function Header() {
  const {cart} = useContext(AppContext)
  return (
    <header className='flex w-full'>Header
      <nav className='  mx-auto'>
        <ul className='flex gap-5'>
          {
            navLinks.map(el => (
              <li key={el.id}>
              <NavLink className={(state) => {
                if (state.isActive) return `text-blue-500`
                return 'text-red-500'
              }} to={el.href}>{el.title}</NavLink>
            </li>
            ))
          }
     
        </ul>
      </nav>
      {cart.length || 'Пусто'}
    </header>
  )
}
