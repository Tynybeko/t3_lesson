import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function Contacts() {
  const {cart} = useContext(AppContext)
  return (
    <div>

      <h1>Contacts</h1>

      <div className='flex flex-col gap-5'> 
      {
        cart.map(el => (
          <div className='flex gap-5' key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.price}</p>
          </div>
        ))
      }
      </div>
    
    </div>
  )
}
