import React, { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import './App.css'
import API from './lib/axios'
import Auth from './pages/Auth'
import PrivateLayout from './layout/PrivateLayout'
import MainLayout from './layout/MainLayout'


export const AppContext = createContext('Context')


export default function App() {

  useEffect(() => {
    // API.get(`categories/`)
  }, [])
  
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
          
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<PrivateLayout/>}>
               <Route index element={<Home />} />
               <Route path='/about' element={<About />} />
            </Route>
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/auth' element={<Auth />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  )
}
