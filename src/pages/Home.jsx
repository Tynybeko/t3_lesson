import React, { useCallback, useContext, useMemo, useState } from 'react'
import { AppContext } from '../App'


const products = [
  {id: 1, title: 'Product 1', price: 100},
  {id: 2, title: 'Product 2', price: 200},
  {id: 3, title: 'Product 3', price: 300},
]


export default function Home() {
  const [count, setCount] = useState(0)

  
// const a = () => console.log(count);

  const a = useMemo(
    () => count, 
  [count])
  return (
    <div className='flex flex-col gap-5'>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => console.log(a)}>CONSOLE</button>


    
    </div>
  )
}
