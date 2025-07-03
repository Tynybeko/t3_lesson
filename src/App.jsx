import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import './App.css'


export const AppContext = createContext('Context')


export default function App() {
  const [count, setCount] = useState([])

  const addProduct = (product) => {
    setCount([...count, product])
  }
  const removeProduct = (product) => {
    setCount(count.filter(el => el.id !== product.id))
  }
  const isInCart = (product) => {
    return count.some(el => el.id === product.id)
  }
  return (
    <>

      <AppContext.Provider value={{
        cart: count, 
        addProduct,
        removeProduct,
        isInCart
        }}>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}
