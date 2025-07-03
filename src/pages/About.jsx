import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function About() {
  const {cart} = useContext(AppContext)
  return (
    <div>About {cart.length}</div>
  )
}
