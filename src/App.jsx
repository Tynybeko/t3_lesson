import React, { useState } from 'react'
import Button from './components/UI/Button'
import List from './components/products/List'
import Cart from './components/Cart'

export default function App() {
  const [cartModal, setCartModal] = useState(false)
  const [cartData, setCartData] = useState([])

  const toggleCartModal = () => setCartModal(prev => !prev)
  return (
    <div className='flex flex-col'>
      <div
       
      >
         <Button callback={toggleCartModal}>
          Open
        </Button>
      </div>
      <List cartData={cartData} setCart={setCartData}/>
      <Cart setCart={setCartData} data={cartData} setClose={toggleCartModal} isOpen={cartModal}/>
    </div>
)
}
