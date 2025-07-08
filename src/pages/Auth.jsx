import React from 'react'
import { useNavigate } from 'react-router'

export default function Auth() {
    const navigate = useNavigate()
  return (
    <div>Auth




    <button onClick={() => {
        
            localStorage.setItem('___token___', 'TOKEN')
        navigate(-1)
    }
        
        }>AUTH</button>



    </div>
  )
}
