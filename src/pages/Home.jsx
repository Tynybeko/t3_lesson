import React, { useContext } from 'react'
import { AppContext } from '../App'

const products = [
  {id: 1, title: 'Product 1', price: 100},
  {id: 2, title: 'Product 2', price: 200},
  {id: 3, title: 'Product 3', price: 300},
]

export default function Home() {
  const {addProduct, isInCart, removeProduct}= useContext(AppContext)
  return (
    <div className='flex flex-col gap-5'>
      {
        products.map(el => 
          {
            const isCart = isInCart(el)
            return (
          <div className='flex gap-5' key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <button onClick={() => isCart ? removeProduct(el) : addProduct(el)}>{isCart ? 'Remove' : 'Add'}</button>

          </div>
        )})
      }



    
    </div>
  )
}
