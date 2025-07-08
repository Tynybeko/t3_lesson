import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useOutletContext } from 'react-router'

export default function About() {
  const {cart} = useContext(AppContext)
  const a = useOutletContext()
  console.log('AAAAA',a);
  return (
    <div>About {cart.length}</div>
  )
}
